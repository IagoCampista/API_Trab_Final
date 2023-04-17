import express from 'express'
import cors from 'cors'
import ProdutoRepository from './repositories/produtoRepository'
import factory from './factories/factory'
import Controller from './controller/controller'

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
    controller.pegarClientes(req, res);
})

app.post('/api/registerClientes', (req, res)  =>{
    controller.adicionarCliente(req, res);
})

app.post('/api/updateProspectionDate', (req, res)  =>{
    const {cnpj} = req.body;
    controller.atualizarDataUltimaProspeccao(req, res);
})

app.post('/api/registerVendedores', (req, res)  =>{
    controller.adicionarVendedor(req, res);
})

app.get('/api/vendedores', (req, res) =>{
    const {email} = req.body;
    controller.pegarVendedorPeloEmail(req, res);
})

app.listen(7000, ()=>{
    console.log('Server os running on port 7000')
})