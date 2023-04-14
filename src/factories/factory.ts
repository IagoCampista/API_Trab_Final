import Controller from "../controller/controller";
import produtoRepository from "../repositories/produtoRepository";
import { ProdutoUseCase } from "../useCase/buscadorDeProduto";


function factory(){
    const repo = new produtoRepository();
    const useCase = new ProdutoUseCase(repo);
    const controller = new Controller(useCase);

    return controller;

}

export default factory;