
import { ProdutoUseCase } from '../useCase/buscadorDeProduto';
import { IProdutoRepository } from '../repositories/produtoRepository';

describe('ProdutoUseCase', () => {
       let mockRepo: IProdutoRepository;
       let useCase: ProdutoUseCase;

       beforeEach(() => {
              mockRepo = {
                     getProdutos: jest.fn(),
                     listaProdutos: [],
                     fileName: 'test'
              };
              useCase = new ProdutoUseCase(mockRepo);
       });

       describe('obterProdutos', () => {
              test('returns a stringified array of products when there are products', async () => {
                     const produtos = [
                            { id: '1', name: 'produto 1', id_categoria: 1, preco: 10.0, idProdutoSubstituto: 0, }, 
                            { id: '2', name: 'produto 2', id_categoria: 2, preco: 20.0, idProdutoSubstituto: 1, },];
                     mockRepo.getProdutos = jest.fn().mockReturnValue(produtos);
                     const result = await useCase.obterProdutos();

                     expect(result).toBeDefined();
                     expect(result).toContain('id');
                     expect(result).toContain('name');
                     expect(result).toContain('id_categoria');
                     expect(result).toContain('preco');
                     expect(result).toContain('idProdutoSubstituto');
                     expect(mockRepo.getProdutos).toHaveBeenCalledTimes(1);
              });

              test('rejects with an error message when there are no products', async () => {
                     mockRepo.getProdutos = jest.fn().mockReturnValue([]);

                     await expect(useCase.obterProdutos()).rejects.toEqual('Nenhum produto encontrado');
                     expect(mockRepo.getProdutos).toHaveBeenCalledTimes(1);
              });
       });
});