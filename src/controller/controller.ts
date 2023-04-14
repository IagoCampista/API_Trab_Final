import { IProdutoUseCase } from "../useCase/buscadorDeProduto";
import {Request,Response} from 'express';

export default class Controller {

       produtoUseCase: IProdutoUseCase;

       constructor(useCase: IProdutoUseCase) {
              this.produtoUseCase = useCase;
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

}