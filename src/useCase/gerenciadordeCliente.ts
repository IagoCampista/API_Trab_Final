import Cliente from "../entities/cliente";
import { IClienteRepository } from "../repositories/clienteRepository";

export interface IClienteUseCase {
    repo: IClienteRepository;
    getClientes(): Promise<string>;
    addCliente(name: string, cnpj: string, nivelDesconto: string, area: number, dataUltimaProspeccao: string ):Promise<string>;
    updateDataUltimaProspeccao(cnpj: string): Promise<string>;
}

export class ClienteUseCase implements IClienteUseCase {
    repo:IClienteRepository;

       constructor (repo:IClienteRepository){
              this.repo = repo;
       }

       async getClientes(): Promise<string> {
              const clientes = this.repo.getClientes();
              if(clientes.length === 0){
                     return Promise.reject("Nenhum cliente encontrado");
              }
              return Promise.resolve(JSON.stringify(clientes));
       }

       async addCliente(nome: string, cnpj: string, nivelDesconto: string, area: number, dataUltimaProspeccao: string): Promise<string> {
              if (this.repo.addCliente(nome, cnpj, nivelDesconto, area, dataUltimaProspeccao)) {
                     return Promise.resolve("Cliente adicionado com sucesso");
              }
              return Promise.reject("Cliente já existe");
       }

       async updateDataUltimaProspeccao(cnpj: string): Promise<string> {
              if (this.repo.updateDataUltimaProspeccao(cnpj)) {
                     return Promise.resolve("Data de última prospecção atualizada com sucesso");
              }
              return Promise.reject("Cliente não encontrado ");
       }
}