import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
} from "typeorm";
import { Aadhar } from "./aadhar.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @OneToOne(() => Aadhar, (aadhar) => aadhar.user)
  @JoinColumn()
  aadhar: Relation<Aadhar>;
}
