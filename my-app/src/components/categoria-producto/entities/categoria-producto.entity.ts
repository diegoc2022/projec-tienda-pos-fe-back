import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'tbl_categoria_prod' })
export class CategoriaProducto {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string
}
