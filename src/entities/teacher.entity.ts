import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Relation,
} from "typeorm";
import { Student } from "./student.entity";
@Entity()
export class Teacher {
  //   @Unique(["empId"])
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  empId: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  subject: string;
  @Column()
  bloodGroup: string;
  @OneToMany(() => Student, (student) => student.teacher)
  student: Relation<Student>;
}
