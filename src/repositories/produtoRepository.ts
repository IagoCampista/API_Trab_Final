import Produto, { IProduto } from "../entities/produto";
import * as fs from 'fs';

export interface IProdutoRepository {
       listaProdutos: IProduto[];
       fileName: string;
       getProdutos(): IProduto[];

}

export default class ProdutoRepository implements IProdutoRepository {
       listaProdutos: IProduto[];

       constructor(public fileName: string = 'products') {
              this.listaProdutos = JSON.parse(fs.readFileSync('data/' + fileName + '.json', 'utf-8')).map(
                     (item: any) =>
                            new Produto(
                                   item.id,
                                   item.name,
                                   item.id_categoria,
                                   item.preco,
                                   item.idProdutoSubstituto
                            )
              );
       }
       getProdutos(): IProduto[] {
              return this.listaProdutos;
       }
}