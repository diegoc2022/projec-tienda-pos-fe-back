import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'tbl_impuestos' })
export class Impuesto {
    @PrimaryColumn()
    id: number;

    @Column()
    valor_iva: number;
}
