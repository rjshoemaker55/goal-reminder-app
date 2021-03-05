import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Goal } from './entity/Goal.entity'

createConnection()
  .then(async (connection) => {
    // let goal = new Goal()
    // goal.title = 'New Goal'
    // goal.description = 'New goal description.'
    // goal.completed_date = '03/04/2021'
    // goal.annotation = '24 minutes!'

    let goalRepo = connection.getRepository(Goal)

    // await goalRepo.save(goal)
    // console.log('New goal added, goal id: ', goal.id)

    let goals = await goalRepo.find()
    console.log('All goals from the db: ', goals)

    let goalOne = await goalRepo.findOne({ id: 1 })
    console.log('Goal with id of 1: ', goalOne)

    let goalsWithTitle = await goalRepo.find({ title: 'New Goal' })
    console.log('Goals with "New Goal" title', goalsWithTitle)

    let [allGoals, goalsCount] = await goalRepo.findAndCount()
    console.log('All goals: ', allGoals)
    console.log('Goal Count: ', goalsCount)
  })
  .catch((error) => console.log(error))
