import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RecordEntity } from './record.entity';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @CreateDateColumn()
  memberSince: Date;

  @OneToOne(() => RecordEntity, (record) => record.student)
  recordId: string | undefined;
}
