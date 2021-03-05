import 'reflect-metadata'
import { getConnection, createConnection } from 'typeorm'
import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { Goal } from '../../src/entity/Goal.entity'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

createConnection()
  .then(async (connection) => {
    let goalRepo = connection.getRepository(Goal)

    handler.get(async (req, res) => {
      let goals = await goalRepo.find()

      res.statusCode = 200
      res.json({
        status: 'success',
        data: goals
      })
    })
  })
  .catch((err) => console.log(err))

export default handler
