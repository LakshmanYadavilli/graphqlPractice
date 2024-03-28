import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Relation,
} from "typeorm";
import { Teacher } from "./teacher.entity";
@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  grade: string;
  @Column()
  bloodGroup: string;
  @ManyToOne(() => Teacher, (teacher) => teacher.student, { cascade: true })
  @JoinColumn()
  teacher: Relation<Teacher>;
}
