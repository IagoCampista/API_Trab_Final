import ProdutoRepository from "../repositories/produtoRepository";
import Produto, { IProduto } from "../entities/produto";
import * as fs from 'fs';

describe("ProdutoRepository", () => {
  const testFile = "data/test.json";
  let repo: ProdutoRepository;

  const mockProdutos = [
       new Produto("1", "produto1", 1, 100, 2),
       new Produto("2", "produto2", 2, 200, 3),
       new Produto("3", "produto3", 1, 150, 4),    
  ];

  beforeEach(() => {
       fs.truncate(testFile, 0,()=>{});
       fs.writeFileSync(testFile,JSON.stringify(mockProdutos));
       repo = new ProdutoRepository("test");
  });
  
  it('confifura o fileName para test',()=>{
      repo = new ProdutoRepository("test");
      expect(repo.fileName).toEqual("test");
    });
    
  it('configura o fileName como "users"', () => {
      repo = new ProdutoRepository();
      expect(repo.fileName).toBe('products');
    });

  it("retorna um array de produtos", () => {
    const produtos = repo.getProdutos();
    expect(produtos).toEqual(mockProdutos);
  });
});