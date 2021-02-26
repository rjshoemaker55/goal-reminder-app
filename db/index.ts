import { Sequelize } from 'sequelize-typescript'
import pg from 'pg'
import Goal from './models/Goal'

const sequelize = new Sequelize(
  process.env.DB_NAME || 'goalkeeper',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'postgres',
  {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'goalkeeper',
    host: process.env.DB_HOST || 'localhost',
    storage: ':memory:',
    models: [Goal],
    dialect: 'postgres',
    dialectModule: pg
  }
)

const db = {
  sequelize: sequelize,
  Sequelize: Sequelize
}

export default db
