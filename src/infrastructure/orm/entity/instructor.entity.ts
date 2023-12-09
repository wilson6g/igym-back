import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RecordEntity } from './record.entity';

@Entity('instructors')
export class InstructorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @CreateDateColumn()
  joinedAt: Date;

  @OneToMany(() => RecordEntity, (record) => record.instructor)
  records: RecordEntity[];
}
