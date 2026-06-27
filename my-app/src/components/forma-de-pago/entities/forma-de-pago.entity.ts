import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_forma_de_pago' })
export class FormaDePago {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string

    @Column()
    created_at: Date;
}
