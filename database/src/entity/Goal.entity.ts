import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Goal {
  @PrimaryGeneratedColumn()
  id: number
  @Column('varchar')
  title: string
  @Column('varchar')
  description: string
  @Column('varchar')
  completed_date: string
  @Column('varchar')
  annotation: string
}
