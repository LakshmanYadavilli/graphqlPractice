import { Entity, PrimaryGeneratedColumn, OneToOne, Relation } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class Aadhar {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => User, (user) => user.aadhar)
  user: Relation<User>;
}
