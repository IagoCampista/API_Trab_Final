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
  
  it('should set test',()=>{
      repo = new ProdutoRepository("test");
      expect(repo.fileName).toEqual("test");
    })
    
  it('should set the fileName property to "users" by default', () => {
      repo = new ProdutoRepository();
      expect(repo.fileName).toBe('products');
    });

  it("should return an array of products", () => {
    const produtos = repo.getProdutos();
    expect(produtos).toEqual(mockProdutos);
  });
});