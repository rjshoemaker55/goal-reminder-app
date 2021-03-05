import 'reflect-metadata'
import { getConnection, createConnection } from 'typeorm'
import nextConnect from 'next-connect'
import { Goal } from '../../src/entity/Goal'

const handler = nextConnect()

handler.use(nextConnect())

handler.get((req, res) => {
  createConnection()
    .then(async (connection) => {
      let goalRepo = connection.getRepository(Goal)

      const goals = await goalRepo.find()

      res.statusCode = 200
      res.json({
        status: 'success',
        data: goals
      })
    })
    .catch((err) => res.json({ status: 400, data: err }))
})

export default handler
