export class CreateProductoDto {
    codProd: string;
    descripcion: string;
    precio_compra: number;
    precio_venta: number;
    existencia: number;
    id_categoria: number;
    iva: number;
    utilidad: number;
    id_proveedor: number;
    venta_por_und: boolean;
    createAt: Date;
    updated_at: Date;
    activo: boolean;
}
