import IProdutoRepository from "../repositories/produtoRepository";

export interface IProdutoUseCase {
    repo: IProdutoRepository;
    obterProdutos(): Promise<string>;
}

export class ProdutoUseCase{
    repo:IProdutoRepository;

    constructor (repo:IProdutoRepository){
       this.repo = repo;
    }

    async obterProdutos():Promise<string>{
       const produto = this.repo.getProdutos();
       if(produto.length === 0){
              return Promise.reject("Nenhum produto encontrado");
       }
       return Promise.resolve(JSON.stringify(produto));
    }

}