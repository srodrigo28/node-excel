const express = require('express')
const app = express()

const xlsx = require('xlsx') // carrega a biblioteca para usar o excel
const file = './dados_clientes.xlsx' // carrega o excel base de dados

const lodash = require('lodash')

app.get('/', (req, res) => {
  res.send('<h1>Welcome! Hello World!</h1>')
})

app.get('/clientes', (req, res) => {
  const wb = xlsx.readFile(file)
  const ws = wb.Sheets["Sheet1"] // Pega a guia do excel
  const data = xlsx.utils.sheet_to_json(ws) // pega os dados e transforma em json

  const spec = {}
  const _u = lodash.noConflict()

  for(let i = 0; i < data.length; i++) {
    _u.set(spec, `${i}`, data[i])
  }

 res.send(spec)
})

app.listen(8081, () => {
  console.log('Example app listening on port 8081!')
})