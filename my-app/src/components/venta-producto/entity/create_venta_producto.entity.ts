
import { VinculosEntity } from "src/components/viculos/entity/create-vinculos.entity";
import { Column, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_venta_producto' })
export class VentaProductoEntity {

    @PrimaryColumn()
    codProd: string;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ nullable: true, type: 'float' })
    precio_compra: number;

    @Column({ nullable: false })
    precio_venta: number;


    @Column({ nullable: false })
    existencia: number;

    @Column({ nullable: true })
    iva: number;

    @Column({ nullable: true })
    utilidad: number;

    @Column({ nullable: true })
    id_categoria: number;

    @Column({ nullable: true })
    id_proveedor: number;

    @Column({ default: false })
    venta_por_und: boolean;

    @Column({ nullable: true })
    activo: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    updated_at: Date;

    @OneToMany(() => VinculosEntity, (cod) => cod.producto)
    codigoVinculo: VinculosEntity;

}
