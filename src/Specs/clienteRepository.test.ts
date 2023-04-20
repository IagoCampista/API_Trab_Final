import ClienteRepository, { IClienteRepository } from "../repositories/clienteRepository";
import Cliente from "../entities/cliente";
import * as fs from 'fs';

const mockFileName = 'test';

// A helper function that deletes the test file created during the tests
const deleteTestFile = () => {
    try {
        fs.unlinkSync('data/' + mockFileName + '.json');
    } catch (err) {
        // do nothing if the file doesn't exist
    }
};

describe('ClienteRepository', () => {
    let clienteRepository: IClienteRepository;

    beforeAll(() => {
        clienteRepository = new ClienteRepository(mockFileName);
    });

    beforeEach(() => {
        deleteTestFile();
    });

    afterAll(() => {
        deleteTestFile();
    });

    describe('addCliente', () => {
        it('adiciona um novo cliente', () => {
            const result = clienteRepository.addCliente('Cliente1', '123456789', 'ruby', 1, '2022-01-01');
            expect(result).toBeTruthy();
            const clients = clienteRepository.getClientes();
            expect(clients).toHaveLength(1);
            expect(clients[0]).toBeInstanceOf(Cliente);
            expect(clients[0].nome).toBe('Cliente1');
            expect(clients[0].cnpj).toBe('123456789');
            expect(clients[0].nivelDesconto).toBe('ruby');
            expect(clients[0].area).toBe(1);
            expect(clients[0].dataUltimaProspeccao).toBe('2022-01-01');
        });

        it('nao adiciona cliente com cnpj repetido', () => {
            clienteRepository.addCliente('Cliente 1', '123456789', 'ruby', 1, '2022-01-01');
            const result = clienteRepository.addCliente('Cliente 2', '123456789', 'esmeralda', 2, '2022-01-02');
            expect(result).toBeFalsy();
            const clients = clienteRepository.getClientes();
            expect(clients).toHaveLength(1);
        });
    });

    describe('updateDataUltimaProspeccao', () => {
        beforeEach(() => {
            clienteRepository.addCliente('Cliente1', '123456789', 'ruby', 1, '2022-01-01');
        });

        it('atualiza a data da ultima prospeccao', () => {
            const result = clienteRepository.updateDataUltimaProspeccao('123456789');
            expect(result).toBeTruthy();
            const clients = clienteRepository.getClientes();
            expect(clients[0].dataUltimaProspeccao).toBe(new Date().toISOString().slice(0, 10));
        });

        it('retorna falso se o cliente não é encontrado para atualizar a data', () => {
            const result = clienteRepository.updateDataUltimaProspeccao('987654321');
            expect(result).toBeFalsy();
        });
    });
});