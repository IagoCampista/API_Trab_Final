import express from 'express'
import cors from 'cors'
import ProdutoRepository from './repositories/produtoRepository'
import factory from './factories/factory'

const produtoRepository = new ProdutoRepository()
const controller = factory();

const app = express ()
app.use(cors())
app.use(express.json())
app.get('/api/produtos', (req, res) =>{
    controller.pegarProdutos(req, res);
})

app.get('/api/areas', (req, res) =>{
    res.json([
        {id: 1, name: 'Centro'},
        {id: 2, name: 'Guarus'},
        {id: 3, name: 'Pelinca'},
        {id: 4, name: 'IPS'},
    ])
})

app.get('/api/categorias', (req, res) =>{
    res.json([
        {id: 1, name: 'Hardware', descricao:'A categoria hardware pode incluir uma variedade de componentes de hardware, como placas-mãe, processadores, memórias RAM, discos rígidos, placas de vídeo, monitores, teclados, mouses, entre outros.'},
        {id: 2, name: 'Softwares', descricao:'Essa categoria pode incluir uma variedade de softwares, como sistemas operacionais, aplicativos de produtividade, programas de design gráfico, softwares antivírus, softwares de backup e armazenamento em nuvem, entre outros.'},
        {id: 3, name: 'Periféricos', descricao:'Essa categoria pode incluir uma variedade de periféricos, como impressoras, scanners, projetores, webcams, caixas de som, fones de ouvido, microfones, entre outros.'},
        {id: 4, name: 'Redes e comunicação', descricao:'Essa categoria pode incluir uma variedade de equipamentos de redes e comunicação, como roteadores, switches, modems, cabos de rede, placas de rede, telefones IP, entre outros.'},
        {id: 5, name: 'Segurança da informação', descricao:'Essa categoria pode incluir uma variedade de produtos de segurança, como firewalls, sistemas de detecção de intrusão, antivírus, softwares de criptografia, gerenciadores de senhas, entre outros.'},
    ])
})

app.get('/api/clientes', (req, res) =>{
    res.json([
        {id: 1, name: 'LucasFilm', cnpj: '00.000.000/0001-00', nivelDesconto: 'ouro', dataUltimaProspeccao: '2021-09-01', area: 1},
        {id: 2, name: 'Coca-Cola', cnpj: '00.000.000/0002-00', nivelDesconto: 'prata', dataUltimaProspeccao: '2021-09-02', area: 2},
        {id: 3, name: 'Microsoft', cnpj: '00.000.000/0003-00', nivelDesconto: 'ruby', dataUltimaProspeccao: '2021-09-03', area: 3},
        {id: 4, name: 'Apple', cnpj: '00.000.000/0004-00', nivelDesconto: 'ouro', dataUltimaProspeccao: '2021-09-04', area: 4},
        {id: 5, name: 'Samsung', cnpj: '00.000.000/0005-00', nivelDesconto: 'diamante', dataUltimaProspeccao: '2021-09-05', area: 1},
        {id: 6, name: 'Sony', cnpj: '00.000.000/0006-00', nivelDesconto: 'prata', dataUltimaProspeccao: '2021-09-06', area: 2},
        {id: 7, name: 'Disney', cnpj: '00.000.000/0007-00', nivelDesconto: 'ruby', dataUltimaProspeccao: '2021-09-07', area: 3},
        {id: 8, name: 'Amazon', cnpj: '00.000.000/0008-00', nivelDesconto: 'esmeralda', dataUltimaProspeccao: '2021-09-08', area: 4},
        {id: 9, name: 'Google', cnpj: '00.000.000/0009-00', nivelDesconto: 'diamante', dataUltimaProspeccao: '2021-09-09', area: 1},
        {id: 10, name: 'Facebook', cnpj: '00.000.000/0010-00', nivelDesconto: 'ouro', dataUltimaProspeccao: '2021-09-10', area: 2},
        {id: 11, name: 'Twitter', cnpj: '00.000.000/0011-00', nivelDesconto: 'prata', dataUltimaProspeccao: '2021-09-11', area: 3},
        {id: 12, name: 'Instagram', cnpj: '00.000.000/0012-00', nivelDesconto: 'ruby', dataUltimaProspeccao: '2021-09-12', area: 4},
        {id: 13, name: 'TikTok', cnpj: '00.000.000/0013-00', nivelDesconto: 'esmeralda', dataUltimaProspeccao: '2021-09-13', area: 1},
        {id: 14, name: 'Netflix', cnpj: '00.000.000/0014-00', nivelDesconto: 'diamante', dataUltimaProspeccao: '2021-09-14', area: 2},
        {id: 15, name: 'Spotify', cnpj: '00.000.000/0015-00', nivelDesconto: 'ouro', dataUltimaProspeccao: '2021-09-15', area: 3}
    ])
})

app.listen(7000, ()=>{
    console.log('Server os running on port 7000')
})