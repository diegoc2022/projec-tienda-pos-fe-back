import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_documento' })
export class TipoDocumento {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    nombre: string

    @Column()
    created_at: Date;
}
