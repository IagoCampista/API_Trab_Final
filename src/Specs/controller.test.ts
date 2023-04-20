import Controller from '../controller/controller';
import { IProdutoUseCase } from '../useCase/buscadorDeProduto';
import { IClienteUseCase } from '../useCase/gerenciadordeCliente';
import { IVendedorUseCase } from '../useCase/gerenciadorDeVendedor';

describe('Controller', () => {
  let produtoUseCase: IProdutoUseCase;
  let clienteUseCase: IClienteUseCase;
  let vendedorUseCase: IVendedorUseCase;
  let controller: Controller;
  let mockRequest: any;
  let mockResponse: any;

  beforeEach(() => {
    produtoUseCase = {
      obterProdutos: jest.fn(),
    } as unknown as IProdutoUseCase;

    clienteUseCase = {
      getClientes: jest.fn(),
      addCliente: jest.fn(),
      updateDataUltimaProspeccao: jest.fn(),
    } as unknown as IClienteUseCase;

    vendedorUseCase = {
      addVendedor: jest.fn(),
      getVendedorByEmail: jest.fn(),
      addDadosLogin: jest.fn(),
    } as unknown as IVendedorUseCase;

    controller = new Controller(produtoUseCase, clienteUseCase, vendedorUseCase);

    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      statusMessage: '',
    };
  });

  describe('pegarProdutos', () => {
    it('retorna uma lista de produtos', async () => {
      const products = [{ name: 'Produto 1' }, { name: 'Produto 2' }];
      (produtoUseCase.obterProdutos as jest.Mock).mockResolvedValueOnce(products);

      await controller.pegarProdutos(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(products);
    });
  });

  describe('pegarClientes', () => {
    it('retorna uma lista de lientes', async () => {
      const clients = [{ name: 'Cliente 1' }, { name: 'Cliente 2' }];
      (clienteUseCase.getClientes as jest.Mock).mockResolvedValueOnce(clients);

      await controller.pegarClientes(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(clients);
    });
  });

  describe('pegar vendedor pelo email', () => {
    it('um vendedor', async () => {
      const vendedores = [{ name: 'Vendedor 1', email: 'vendedor1@gmail.com' }, { name: 'Vendedor 2', email: 'vendedor2@gmail.com' }];
      (vendedorUseCase.getVendedorByEmail as jest.Mock).mockResolvedValueOnce(vendedores);
       mockRequest = {body: { email: 'vendedor1@gmail.com' }};
      await controller.pegarVendedorPeloEmail(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(vendedores);
    });
  });

   describe('adicionarCliente', () => {
       it('adiciona um cliente', async () => {
              const nome = 'Cliente 1';
              const cnpj = '123456789';
              const nivelDesconto = '10';
              const area = 'Centro';
              const dataUltimaProspeccao = '2021-10-10';
              const cliente = { nome, cnpj, nivelDesconto, area, dataUltimaProspeccao };
              (clienteUseCase.addCliente as jest.Mock).mockResolvedValueOnce(cliente);

              mockRequest = { body: { nome, cnpj, nivelDesconto, area, dataUltimaProspeccao } };

              await controller.adicionarCliente(mockRequest, mockResponse);

              expect(mockResponse.status).toHaveBeenCalledWith(200);
              expect(mockResponse.json).toHaveBeenCalledWith(cliente);
       });
    });

       describe('adicionarVendedor', () => {
              it('adiciona um vendedor', async () => {
                     const nome = 'Vendedor 1';
                     const email = 'vendedor1@gmail.com';
                     const senha = '123456';
                     const vendedor = { nome, email, senha };
                     (vendedorUseCase.addVendedor as jest.Mock).mockResolvedValueOnce(vendedor);

                     mockRequest = { body: { nome, email, senha } };

                     await controller.adicionarVendedor(mockRequest, mockResponse);

                     expect(mockResponse.status).toHaveBeenCalledWith(200);
                     expect(mockResponse.json).toHaveBeenCalledWith(vendedor);

              });
       });

       describe('atualizarDataUltimaProspeccao', () => {
              it('atualiza a data da ultima prospeccao', async () => {
                     const cnpj = '0001';
                     (clienteUseCase.updateDataUltimaProspeccao as jest.Mock).mockResolvedValueOnce(cnpj);

                     mockRequest = { body: { cnpj } };

                     await controller.atualizarDataUltimaProspeccao(mockRequest, mockResponse);

                     expect(mockResponse.status).toHaveBeenCalledWith(200);
                     expect(mockResponse.json).toHaveBeenCalledWith(cnpj);

              });
       });


});