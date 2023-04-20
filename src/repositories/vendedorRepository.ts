
import Vendedor, { IVendedor } from '../entities/vendedor';
import * as fs from 'fs';

export interface IVendedorRepository {
       listaVendedores: IVendedor[];
       fileName: string;
       findVendedorByEmail(email: string): IVendedor | undefined;
       addVendedor(nome: string, email: string, senha: string): boolean;
       addVendedorToken(email: string, token: string): boolean;
}

export default class VendedorRepository implements IVendedorRepository {
       listaVendedores: IVendedor[] = [];

       constructor(public fileName: string = 'sellers') {
              this.loadlistaVendedores();
              
       }

       private loadlistaVendedores(): void {
              try {
                     const data = fs.readFileSync('data/'+this.fileName+'.json');
                     let parsedData = JSON.parse(data.toString());
                     if (Array.isArray(parsedData)) {
                     this.listaVendedores = parsedData;
                     } 
              } catch (err) {
                     this.listaVendedores = [];
              }
       } 

       private saveListaVendedores(): void {
              fs.writeFileSync('data/'+this.fileName+'.json', JSON.stringify(this.listaVendedores)) ;
       }

       findVendedorByEmail(email: string): IVendedor | undefined {
              return this.listaVendedores.find((vendedor) => vendedor.email === email);

       }

       addVendedor(nome: string, email: string, senha: string): boolean {
              if(this.listaVendedores.findIndex((vendedor) => vendedor.email === email) !== -1){
                     return false;
              }
              let id = this.listaVendedores.length==0 ? 0 : this.listaVendedores[this.listaVendedores.length-1].id + 1;
              let vendedor = new Vendedor(id, nome, email, senha)
              this.listaVendedores.push(vendedor);
              this.saveListaVendedores();
              return true;   
       }

       addVendedorToken(email: string, token: string): boolean {
              let index = this.listaVendedores.findIndex((vendedor) => vendedor.email === email)
              if(index !== -1){
                     return false;
              }
              this.listaVendedores[index].token = (token);
              return true;   
       }

}