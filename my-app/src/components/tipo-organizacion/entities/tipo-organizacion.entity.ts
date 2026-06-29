import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_organizacion' })
export class TipoOrganizacion {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    nombre: string

    @Column()
    created_at: Date
}
