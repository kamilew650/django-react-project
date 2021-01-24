import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export const USER_EMAIL_MAX_LENGTH = 100;


@Entity(User.name.toLowerCase())
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  readonly id: number;

  @Column({ default: false, type: "boolean" })
  isActive: boolean;

  @Column({ length: USER_EMAIL_MAX_LENGTH, unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  password: string;
}
