import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RecordEntity } from './record.entity';

@Entity('record_exercises')
export class RecordExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RecordEntity, (record) => record.recordExercises)
  record: RecordEntity;

  @ManyToOne(() => RecordEntity)
  exercise: string;

  @Column()
  reps: number;

  @Column()
  sets: number;

  @Column()
  weight: number;

  @CreateDateColumn()
  createdAt: Date;
}
