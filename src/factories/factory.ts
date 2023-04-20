import { ClienteUseCase } from "../useCase/gerenciadordeCliente";
import Controller from "../controller/controller";
import produtoRepository from "../repositories/produtoRepository";
import { ProdutoUseCase } from "../useCase/buscadorDeProduto";
import clienteRepository from "../repositories/clienteRepository";
import { VendedorUseCase } from "../useCase/gerenciadorDeVendedor";
import vendedorRepository from "../repositories/vendedorRepository";


function factory(){
    const produtoRepo = new produtoRepository();
    const clientRepo = new clienteRepository();
    const vendedorRepo = new vendedorRepository();

    const produtoUseCase = new ProdutoUseCase(produtoRepo);
    const clienteUseCase = new ClienteUseCase(clientRepo);
    const vendedoreUseCase = new VendedorUseCase(vendedorRepo);
    
    const controller = new Controller(produtoUseCase, clienteUseCase, vendedoreUseCase);

    return controller;

}

export default factory;