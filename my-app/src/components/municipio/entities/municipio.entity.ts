import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_municipio' })
export class Municipio {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    nombre: string

    @Column()
    created_at: Date;
}
