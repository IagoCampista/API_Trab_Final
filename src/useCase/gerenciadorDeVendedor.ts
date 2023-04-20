import { IVendedorRepository } from "@src/repositories/vendedorRepository";
import crypto from 'crypto';


export interface IVendedorUseCase {
    repo: IVendedorRepository;
    getVendedorByEmail(email: string): Promise<string>
    addVendedor(nome: string, email: string, senha: string):Promise<string>;
    addDadosLogin(email: string, senha: string): Promise<string>;
}

export class VendedorUseCase implements IVendedorUseCase {
    repo:IVendedorRepository;

       constructor (repo:IVendedorRepository){
              this.repo = repo;
       }

       async getVendedorByEmail(email: string): Promise<string> {
              let data = this.repo.findVendedorByEmail(email);
              if(data === undefined){
                     return Promise.reject(new Error("Vendedor não encontrado"))
              }
                     return Promise.resolve(this.stringify(data, ["id","senha"]));        
       }

       async addVendedor(nome: string, email: string, senha: string): Promise<string> {
              if (this.repo.addVendedor(nome, email, senha)) {
                     return Promise.resolve("Vendedor adicionado com sucesso");
              }
              return Promise.reject("Vendedor já existe");
       }
       
       async addDadosLogin(email: string, senha: string): Promise<string> {       
              let vendedor = this.repo.findVendedorByEmail(email);
              if(vendedor === undefined){
                     return Promise.reject(new Error('Vendedor não encontrado'));
              }
              if(vendedor.senha !== senha){
                     return Promise.reject(new Error('Senha incorreta'));
              }
              let newAuthToken = crypto.createHash('md5').update(Math.random().toString()).digest('hex');
              this.repo.addVendedorToken(email, newAuthToken);
              
              return Promise.resolve(newAuthToken);
       }


       stringify(entity:any, fieldsToRemove:any) {
              return JSON.stringify(entity, (key, value) => {
              if (fieldsToRemove.includes(key)) {
                     return undefined;
              }
              return value;
       })}
       
}
