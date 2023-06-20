import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('increment')
  number: number;

  @Column()
  Writer: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
