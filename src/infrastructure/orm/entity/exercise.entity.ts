import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exercises')
export class ExerciseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
