import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "../card/card.entity";
import { User } from "../user/entities/user.entity";

@Entity("folder")
export class Folder {
  @PrimaryGeneratedColumn({ type: "int" })
  readonly id: number;

  @Column()
  name: string;

  @Column()
  fromLang: string;

  @Column()
  toLang: string;

  @OneToMany(() => Card, card => card.folder, { nullable: true })
  cards: Card[]

  @ManyToOne(() => User, user => user.folder)
  user: User

  @Column()
  @Column()
  user_id
}