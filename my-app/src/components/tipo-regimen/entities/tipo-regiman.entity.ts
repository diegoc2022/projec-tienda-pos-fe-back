import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_tipo_regimen' })
export class TipoRegimen {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: true })
    nombre: string;

    @Column()
    created_at: Date

}
