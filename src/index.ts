import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port = 3000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello world' })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
