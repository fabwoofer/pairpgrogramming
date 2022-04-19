import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { fetchImage } from './src/imageService'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req: Request, res: Response) => {
  res.send('This works!')
})

app.get('/image', async (req: Request, res: Response) => {
  const image = await fetchImage()

  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(image))
})

app.listen(port, () => {
  console.log(`🌙🌙🌙[server]: Server is running at http://localhost:${port}`)
})
