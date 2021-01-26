import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Folder } from "../folder/folder.entity";
import { User } from "../user/entities/user.entity";


@Entity("card")
export class Card {
  @PrimaryGeneratedColumn({ type: "int" })
  readonly id: number;

  @Column()
  before: string;

  @Column()
  after: string;

  @ManyToOne(() => Folder, folder => folder.cards, { nullable: true })
  folder: Folder

  @ManyToOne(() => User, user => user.cards)
  user: User
}