export interface ICliente{
       id: number, 
       nome: string,
       cnpj: string, 
       nivelDesconto: string,
       dataUltimaProspeccao: string, 
       area: number
}

export default class Cliente implements ICliente {
       id: number;
       nome: string;
       cnpj: string; 
       nivelDesconto: string;
       dataUltimaProspeccao: string;
       area: number;

       constructor(id: number, nome: string, cnpj: string,  nivelDesconto: string, dataUltimaProspeccao: string, area: number) {
              this.id = id;
              this.nome = nome;
              this.cnpj = cnpj;
              this.nivelDesconto = nivelDesconto;
              this.dataUltimaProspeccao = dataUltimaProspeccao;
              this.area = area;
       }
}