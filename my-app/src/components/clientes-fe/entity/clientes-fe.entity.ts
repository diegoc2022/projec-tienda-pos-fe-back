
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'tbl_clientes_fe' })
export class ClientesFeEntity {
    @PrimaryColumn()
    ident: string;

    @Column()
    tipo_identificacion: number;

    @Column()
    nombre_cliente: string;

    @Column()
    id_municipio: number;

    @Column()
    telefono: string;

    @Column()
    correo: string;

    @Column()
    tipo_organizacion: number;

    @Column()
    tipo_responsabilidad: number;

    @Column()
    tipo_regimen: number;

    @Column()
    direccion: string;

    @Column()
    created_at: Date;

}