import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ type: 'date' })
  date_completed: Date

  @Column()
  annotation: string
}
