import express from 'express'
import cors from 'cors'


const app = express ()
app.use(cors())
app.use(express.json())
app.get('/api/produtos', (req, res) =>{
    res.json([
        {id: 1, name: 'caneta', descricao: 'caneta azul', preco:5}
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

app.listen(7000, ()=>{
    console.log('Server os running on port 7000')
})