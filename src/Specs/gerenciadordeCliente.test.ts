import { ClienteUseCase } from "../useCase/gerenciadordeCliente";
import { IClienteRepository } from "../repositories/clienteRepository";
import Cliente from "../entities/cliente";

const mockClientes = [
  new Cliente(1, "Cliente 1", "11111111111111", "Desconto 1", "2022-01-01", 10),
  new Cliente(2, "Cliente 2", "22222222222222", "Desconto 2", "2022-02-02", 20),
];

describe("ClienteUseCase", () => {
  let mockRepo: IClienteRepository;
  let useCase: ClienteUseCase;

  beforeEach(() => {
    mockRepo = {
      listaClientes: mockClientes,
      fileName: "",
      getClientes: jest.fn().mockReturnValue(mockClientes),
      addCliente: jest.fn(),
      updateDataUltimaProspeccao: jest.fn(),
    };
    useCase = new ClienteUseCase(mockRepo);
  });

  describe("getClientes", () => {
    it("retorna um array de clientes em forma de string", async () => {
      const result = await useCase.getClientes();
      expect(result).toEqual(JSON.stringify(mockClientes));
    });

    it("rejeita com uma mensagem de erro uando nao tem clientes", async () => {
      mockRepo.getClientes = jest.fn().mockReturnValue([]);
      await expect(useCase.getClientes()).rejects.toEqual(
        "Nenhum cliente encontrado"
      );
    });
  });

  describe("addCliente", () => {
    it("adiciona um cliente", async () => {
      mockRepo.addCliente = jest.fn().mockReturnValue(true);
      const result = await useCase.addCliente(
        "Cliente 3",
        "33333333333333",
        "ruby",
        30,
        "2022-03-03"
      );
      expect(result).toEqual("Cliente adicionado com sucesso");
    });

    it("rejeita com uma mensagem de erro quando o cliente ja existe", async () => {
      mockRepo.addCliente = jest.fn().mockReturnValue(false);
      await expect(
        useCase.addCliente(
          "Cliente 1",
          "11111111111111",
          "ruby",
          10,
          "2022-01-01"
        )
      ).rejects.toEqual("Cliente já existe");
    });
  });

  describe("updateDataUltimaProspeccao", () => {
    it("atualiza a data de prospeccao", async () => {
      mockRepo.updateDataUltimaProspeccao = jest.fn().mockReturnValue(true);
      const result = await useCase.updateDataUltimaProspeccao(
        "11111111111111"
      );
      expect(result).toEqual(
        "Data de última prospecção atualizada com sucesso"
      );
    });

    it("nao atualiza a data se o cliente nao é encontrado", async () => {
      mockRepo.updateDataUltimaProspeccao = jest.fn().mockReturnValue(false);
      await expect(
        useCase.updateDataUltimaProspeccao("99999999999999")
      ).rejects.toEqual("Cliente não encontrado ");
    });
  });
});