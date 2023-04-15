import { ClienteUseCase } from "../useCase/gerenciadordeCliente";
import Controller from "../controller/controller";
import produtoRepository from "../repositories/produtoRepository";
import { ProdutoUseCase } from "../useCase/buscadorDeProduto";
import clienteRepository from "../repositories/clienteRepository";


function factory(){
    const produtoRepo = new produtoRepository();
    const clientRepo = new clienteRepository();
    const produtoUseCase = new ProdutoUseCase(produtoRepo);
    const clienteUseCase = new ClienteUseCase(clientRepo);
    const controller = new Controller(produtoUseCase, clienteUseCase);

    return controller;

}

export default factory;