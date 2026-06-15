import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_identificacion' })
export class TipoDocumento {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nombre: string

    @Column()
    created_at: Date;
}
