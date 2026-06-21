import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_ventas_temp' })
export class CreateVentasEmpEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    id_caja: number;

    @Column()
    codProd: string;

    @Column()
    descripcion: string;

    @Column()
    cantidad: number;

    @Column()
    existencia: number;

    @Column()
    precio_compra: number;

    @Column()
    precio_venta: number;

    @Column()
    iva: number;

    @Column()
    total_iva: number;

    @Column()
    subtotal: number;

    @Column()
    vendedor: string;

    @Column()
    sucursal: number

    @Column()
    factura: number;

    @Column()
    estado_venta: string;

    @Column({ type: 'varchar', nullable: true })
    num_mes: number;

    @Column({ type: 'varchar', nullable: true })
    num_year: number;

    @Column()
    fecha_registro: Date;

}