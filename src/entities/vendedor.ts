export interface IVendedor{
       id: number, 
       nome: string,
       email: string,
       senha: string,
       token?: string
}

export default class Vendedor implements IVendedor {
       id: number;
       nome: string;
       email: string;
       senha: string;

       constructor(id: number, nome: string, email: string, senha: string) {
              this.id = id;
              this.nome = nome;
              this.senha = senha;
              this.email = email;
       }
}