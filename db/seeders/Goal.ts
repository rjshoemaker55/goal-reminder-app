import {
  Table,
  Column,
  Model,
  BeforeCreate,
  DataType
} from 'sequelize-typescript'

@Table({ tableName: 'goals' })
class Goal extends Model {
  @Column(DataType.STRING)
  goalName: string
  @Column(DataType.NUMBER)
  daysPerWeek: number
}

export default Goal
