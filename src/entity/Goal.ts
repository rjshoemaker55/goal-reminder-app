import { Entity, Column } from 'typeorm'

@Entity()
export class Goal {
  @Column()
  id: number
  @Column()
  title: string
  @Column()
  description: string
  @Column()
  completed_date: string
  @Column()
  annotation: string
}
