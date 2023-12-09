import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { InstructorEntity } from './instructor.entity';
import { RecordExerciseEntity } from './record-exercise.entity';
import { StudentEntity } from './student.entity';

@Entity('records')
export class RecordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @JoinTable()
  @OneToOne(() => StudentEntity, (student) => student.recordId)
  student: StudentEntity;

  @ManyToOne(() => InstructorEntity, (instructor) => instructor.records)
  instructor: InstructorEntity;

  @OneToMany(
    () => RecordExerciseEntity,
    (recordExercise) => recordExercise.record
  )
  recordExercises: RecordExerciseEntity[];
}
