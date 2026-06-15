import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_municiopio' })
export class Municipio {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string

    @Column()
    created_at: Date;
}
