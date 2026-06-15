import { VentasXCobrarEntity } from "src/components/ventas-x-cobrar/entity/ventas-x-cobrar.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_clientes' })
export class ClientesEntity {
    @PrimaryColumn()
    cedula: string;

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
    tipo_resposabilidad: number;

    @Column()
    tipo_regimen: number;

    @Column()
    created_at: Date;

}