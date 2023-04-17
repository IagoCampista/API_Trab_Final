import { IClienteUseCase } from "..//useCase/gerenciadordeCliente";
import { IProdutoUseCase } from "../useCase/buscadorDeProduto";
import {Request,Response} from 'express';
import { IVendedorUseCase } from "..//useCase/gerenciadorDeUsuario";

export default class Controller {

       produtoUseCase: IProdutoUseCase;
       clienteUseCase: IClienteUseCase;
       vendedorUseCase: IVendedorUseCase;

       constructor(produtoUseCase: IProdutoUseCase, clienteUseCase: IClienteUseCase, vendedorUseCase: IVendedorUseCase) {
              this.produtoUseCase = produtoUseCase;
              this.clienteUseCase = clienteUseCase;
              this.vendedorUseCase = vendedorUseCase;
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
       
       async adicionarVendedor(req: Request, res:Response){
              let nome = req.body.nome;
              let email = req.body.email;
              let senha = req.body.senha;

              let result = this.vendedorUseCase.addVendedor(nome, email, senha);
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }
       async pegarVendedorPeloEmail(req: Request, res:Response){
              let email = req.body.email;
              let result = this.vendedorUseCase.getVendedorByEmail(email);
              result.then(response=>{                       
                     res.status(200).json(response);
              }).catch(error=>{           
                     res.status(404);
                     res.statusMessage = error;
                     res.send()
              })        
       }


}