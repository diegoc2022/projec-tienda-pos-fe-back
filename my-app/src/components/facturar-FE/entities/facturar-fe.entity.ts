import { json } from 'stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tbl_facturar_elect' })
export class FacturarFe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    factura: string;

    @Column()
    tipo_identificacion: number;

    @Column()
    identificaion_cliente: string

    @Column()
    nombre_clliente: string;

    @Column()
    dir_cliente: string;

    @Column({ nullable: true })
    tel_cliente: string;

    @Column({ nullable: true })
    email_cliente: number;

    @Column()
    tipo_organizacion: string;

    @Column()
    tipo_responsabilidad: number;

    @Column()
    municipio: number;

    @Column()
    tipo_regimen: number;

    @Column({ type: 'jsonb' })
    venta_factura: any;

    @Column({ type: 'date' })
    fecha_emision: string;

    @Column({ type: 'time' })
    hora_emision: string;

    @Column()
    fecha_registro: Date;

}
