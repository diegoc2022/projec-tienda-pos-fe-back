
import { VinculosEntity } from "src/components/viculos/entity/create-vinculos.entity";
import { Column, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_productos' })
export class ProductosEntity {

    @PrimaryColumn()
    codProd: string;

    @Column({ nullable: false })
    descripcion: string;

    @Column()
    precio_compra: number;

    @Column({ nullable: false })
    precio_venta: number;

    @Column({ nullable: false })
    existencia: number;

    @Column({ nullable: true })
    id_categoria: number;

    @Column({ nullable: true })
    iva: number;

    @Column({ nullable: true })
    utilidad: number;

    @Column({ nullable: true })
    id_proveedor: number;

    @Column({ default: false })
    venta_por_und: boolean;

    @Column()
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    updated_at: Date;

    @Column({ nullable: true })
    activo: boolean;

    @OneToMany(() => VinculosEntity, (cod) => cod.producto)
    codigoVinculo: VinculosEntity;

}
