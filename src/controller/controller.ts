import { IClienteUseCase } from "@src/useCase/gerenciadordeCliente";
import { IProdutoUseCase } from "../useCase/buscadorDeProduto";
import {Request,Response} from 'express';

export default class Controller {

       produtoUseCase: IProdutoUseCase;
       clienteUseCase: IClienteUseCase;

       constructor(produtoUseCase: IProdutoUseCase, clienteUseCase: IClienteUseCase) {
              this.produtoUseCase = produtoUseCase;
              this.clienteUseCase = clienteUseCase;
       }

       async pegarProdutos(req: Request, res:Response){

              let result = this.produtoUseCase.obterProdutos();
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }
       
       async pegarClientes(req: Request, res:Response){
                     
              let result = this.clienteUseCase.getClientes();
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }

       async adicionarCliente(req: Request, res:Response){
              let nome = req.body.nome;
              let cnpj = req.body.cnpj;
              let nivelDesconto = req.body.nivelDesconto;
              let area = req.body.area;
              let dataUltimaProspeccao = req.body.dataUltimaProspeccao;

              let result = this.clienteUseCase.addCliente(nome, cnpj, nivelDesconto, area, dataUltimaProspeccao);
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }

       async atualizarDataUltimaProspeccao(req: Request, res:Response){
              let cnpj = req.body.cnpj;          

              let result = this.clienteUseCase.updateDataUltimaProspeccao(cnpj);
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }

}