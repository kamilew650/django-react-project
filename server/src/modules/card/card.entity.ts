import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("card")
export class Card {
  @PrimaryGeneratedColumn({ type: "int" })
  readonly id: number;

  @Column()
  originalContent: string;

  @Column()
  translatedContent: string;
}