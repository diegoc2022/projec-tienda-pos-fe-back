export class CreateVentaEmpDto {
    id_caja: number;
    codProd: string;
    descripcion: string;
    existencia: number;
    cantidad: number;
    precio_compra: number;
    precio_venta: number;
    iva: number;
    total_iva: number;
    total_sin_iva: number;
    total_neto: number;
    vendedor: string;
    estado_venta: string;
    factura: number;
    venta_por_und: boolean;
    num_mes: number;
    num_year: number;
    fecha_registro: Date;

}