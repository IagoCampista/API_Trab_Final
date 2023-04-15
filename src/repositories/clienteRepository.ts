import Cliente, { ICliente } from "../entities/cliente";
import * as fs from 'fs';

export interface IClienteRepository {
       listaClientes: ICliente[];
       fileName: string;
       getClientes(): ICliente[];
       addCliente(nome: string, cnpj: string, nivelDesconto: string, area: number, dataUltimaProspeccao: string): boolean;
       updateDataUltimaProspeccao(cnpj: string): boolean;
}

export default class ClienteRepository implements IClienteRepository {
       listaClientes: ICliente[] = [];

       constructor(public fileName: string = 'clients') {
              this.loadlistaClientes();
              
       }

       private loadlistaClientes(): void {
              try {
                     const data = fs.readFileSync('data/'+this.fileName+'.json');
                     let parsedData = JSON.parse(data.toString());
                     if (Array.isArray(parsedData)) {
                     this.listaClientes = parsedData;
                     } 
              } catch (err) {
                     this.listaClientes = [];
              }
       } 

       private saveListaClientes(): void {
              fs.writeFileSync('data/'+this.fileName+'.json', JSON.stringify(this.listaClientes)) ;
       }

       getClientes(): ICliente[] {
              return this.listaClientes;
       }

       addCliente(nome: string, cnpj: string, nivelDesconto: string, area: number, dataUltimaProspeccao: string): boolean {
              if(this.listaClientes.findIndex((cliente) => cliente.cnpj === cnpj) !== -1){
                     return false;
              }
              let id = this.listaClientes.length==0 ? 0 : this.listaClientes[this.listaClientes.length-1].id + 1;
              let cliente = new Cliente(id, nome, cnpj, nivelDesconto, dataUltimaProspeccao, area)
              this.listaClientes.push(cliente);
              this.saveListaClientes();
              return true;
              
       }

       updateDataUltimaProspeccao(cnpj: string): boolean {
              let index = this.listaClientes.findIndex((cliente) => cliente.cnpj === cnpj);
              if(index !== -1){
                     this.listaClientes[index].dataUltimaProspeccao = new Date().toISOString().slice(0, 10);
                     this.saveListaClientes();
                     return true;
              }
              return false;
              
       }

}