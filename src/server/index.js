import proxy from 'express-http-proxy'
import express from 'express'

const server = express()

server.use(proxy('https://api.agmodelsystems.com'))

server.listen(3000, () => {
  console.log('Listening at 3000')
})
