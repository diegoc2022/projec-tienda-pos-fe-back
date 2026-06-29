import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_medio_de_pago' })
export class MedioDePago {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    nombre: string

    @Column()
    created_at: Date;
}
