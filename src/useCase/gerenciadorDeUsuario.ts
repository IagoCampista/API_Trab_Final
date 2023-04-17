import { IVendedorRepository } from "@src/repositories/vendedorRepository";


export interface IVendedorUseCase {
    repo: IVendedorRepository;
    getVendedorByEmail(email: string): Promise<string>
    addVendedor(nome: string, email: string, senha: string):Promise<string>;
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
       
       stringify(entity:any, fieldsToRemove:any) {
              return JSON.stringify(entity, (key, value) => {
              if (fieldsToRemove.includes(key)) {
                     return undefined;
              }
              return value;
       })}
       
}
