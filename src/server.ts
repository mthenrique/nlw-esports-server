import express from 'express'
import { Request, Response } from 'express'

const app = express() 

app.get('/games', (request: Request, response: Response) => {
  return response.json([])
})

app.post('/ads', (request: Request, response: Response) => {
  return response.json([])
})

app.post('/games/:id/ads', (request: Request, response: Response) => {
  return response.json([])
})

app.post('/ads/:id/discord', (request: Request, response: Response) => {
  return response.json([])
})

app.listen(3333)
