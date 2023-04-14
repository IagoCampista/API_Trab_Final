export interface IProduto{
       id: string,
       name: string,
       id_categoria: number,
       preco: number,
       idProdutoSubstituto: number;
}

export default class Produto implements IProduto {
  id: string;
  name: string;
  id_categoria: number;
  preco: number;
  idProdutoSubstituto: number;

  constructor(id: string, name: string, id_categoria: number, preco: number, idProdutoSubstituto: number) {
    this.id = id;
    this.name = name;
    this.id_categoria = id_categoria;
    this.preco = preco;
    this.idProdutoSubstituto = idProdutoSubstituto;
  }
}