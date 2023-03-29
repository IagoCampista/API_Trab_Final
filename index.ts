import express from 'express'
import cors from 'cors'


const app = express ()
app.use(cors())
app.use(express.json())
app.get('/api/produtos', (req, res) =>{
    res.json([
        {id: 1, name: 'Processador Intel Core i9-11900K', id_categoria: 1, preco: 2599.00, idProdutoSubstituto:2},
        {id: 2, name: 'Processador AMD Ryzen 9 5900X', id_categoria: 1, preco: 2699.00, idProdutoSubstituto:1},
        {id: 3, name: 'Placa de vídeo NVIDIA GeForce RTX 3090', id_categoria: 1, preco: 12999.00, idProdutoSubstituto:4},
        {id: 4, name: 'Placa de vídeo AMD Radeon RX 6900 XT', id_categoria: 1, preco: 10999.00, idProdutoSubstituto:3},
        {id: 5, name: 'Monitor gamer ASUS TUF Gaming VG27AQ', id_categoria: 1, preco: 3699.00, idProdutoSubstituto:6},
        {id: 6, name: 'Monitor gamer LG UltraGear 27GN950-B', id_categoria: 1, preco: 4999.00, idProdutoSubstituto:5},
        {id: 7, name: 'Sistema operacional Windows 10 Professional', id_categoria: 2, preco: 1249.99, idProdutoSubstituto:8},
        {id: 8, name: 'Sistema operacional Linux Ubuntu', id_categoria: 2, preco: 19.00, idProdutoSubstituto:7},
        {id: 9, name: 'Pacote Microsoft Office 365 Personal', id_categoria: 2, preco: 249.99, idProdutoSubstituto:10},
        {id: 10, name: 'Pacote LibreOffice', id_categoria: 2, preco: 29.00, idProdutoSubstituto:9},
        {id: 11, name: 'Software de design gráfico Adobe Photoshop CC', id_categoria: 2, preco: 90.00, idProdutoSubstituto:12},
        {id: 12, name: 'Software de design gráfico Affinity Designer', id_categoria: 2, preco: 549.00, idProdutoSubstituto:11},
        {id: 13, name: 'Impressora multifuncional HP LaserJet Pro MFP M428fdw', id_categoria: 3, preco: 3899.00, idProdutoSubstituto:14},
        {id: 14, name: 'Impressora multifuncional Epson EcoTank L3150', id_categoria: 3, preco: 1469.90, idProdutoSubstituto:13},
        {id: 15, name: 'Teclado mecânico Corsair K70 RGB MK.2', id_categoria: 3, preco: 999.00, idProdutoSubstituto:16},
        {id: 16, name: 'Teclado mecânico HyperX Alloy Origins', id_categoria: 3, preco: 799.90, idProdutoSubstituto:15},
        {id: 17, name: 'Webcam Logitech Brio 4K', id_categoria: 3, preco: 1099.00, idProdutoSubstituto:18},
        {id: 18, name: 'Webcam Razer Kiyo', id_categoria: 3, preco: 1099.00, idProdutoSubstituto:17},
        {id: 19, name: 'Roteador TP-Link Archer AX50', id_categoria: 4, preco: 999.00, idProdutoSubstituto:20},
        {id: 20, name: 'Roteador ASUS RT-AX86U', id_categoria: 4, preco: 2499.00, idProdutoSubstituto:19},
        {id: 21, name: 'Switch D-Link DGS-1008A', id_categoria: 4, preco: 199.90, idProdutoSubstituto:22},
        {id: 22, name: 'Switch Cisco SG350-10P', id_categoria: 4, preco: 2399.00, idProdutoSubstituto:21},
        {id: 23, name: 'Modem roteador Wi-Fi NETGEAR Nighthawk AC1900', id_categoria: 4, preco: 1099.00, idProdutoSubstituto:24},
        {id: 24, name: 'Modem roteador Wi-Fi ASUS DSL-AC68U', id_categoria: 4, preco: 1499.00, idProdutoSubstituto:23},
        {id: 25, name: 'Firewall Fortinet FortiGate 60E', id_categoria: 5, preco: 7999.00, idProdutoSubstituto:26},
        {id: 26, name: 'Firewall SonicWall TZ300', id_categoria: 5, preco: 5399.00, idProdutoSubstituto:25},
        {id: 27, name: 'Antivírus McAfee Total Protection 2022', id_categoria: 5, preco: 99.99, idProdutoSubstituto:28},
        {id: 28, name: 'Antivírus ESET Internet Security', id_categoria: 5, preco: 129.90, idProdutoSubstituto:27},
        {id: 29, name: 'Gerenciador de senhas Dashlane', id_categoria: 5, preco: 59.99, idProdutoSubstituto:30},
        {id: 30, name: 'Gerenciador de senhas LastPass', id_categoria: 5, preco: 42.00, idProdutoSubstituto:29}
    ])
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

app.listen(7000, ()=>{
    console.log('Server os running on port 7000')
})