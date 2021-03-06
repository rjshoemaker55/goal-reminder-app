import 'reflect-metadata'
import { getConnection, createConnection } from 'typeorm'
import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { Goal } from '../../database/src/entity/Goal.entity'

const handler = nextConnect<NextApiRequest, NextApiResponse>()

// Creates the connection
createConnection({
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'goal_keeper',
  entities: [Goal],
  synchronize: true,
  logging: false
}).then(async (connection) => {
  let goalRepo = connection.getRepository(Goal)

  handler.get(async (req, res) => {
    let goals = await goalRepo.find()

    res.statusCode = 200
    res.json({
      status: 'success',
      data: goals
    })
    connection.close()
  })
})

export default handler
