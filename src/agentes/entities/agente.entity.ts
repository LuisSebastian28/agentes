import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agente {
  @PrimaryGeneratedColumn()
  id:number;
  @Column()
  nombre:string;
  @Column()
  pais:string;
  @Column()
  rol:string;
}
