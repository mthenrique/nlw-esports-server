import express from 'express'
import { Request, Response } from 'express'

const app = express() 

app.get('/ping', (request: Request, response: Response) => {
  return response.json({ message: 'Retorno do ping' })
})

app.listen(3333)
