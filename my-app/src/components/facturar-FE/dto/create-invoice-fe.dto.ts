export class CreateInvoiceDto {

    id: number;
    factura: string;
    tipo_identificacion: number;
    identificaion_cliente: string
    nombre_clliente: string;
    dir_cliente: string;
    tel_cliente: string;
    email_cliente: number;
    tipo_organizacion: string;
    tipo_responsabilidad: number;
    municipio: number;
    tipo_regimen: number;
    venta_factura: any;
    fecha_emision: string;
    hora_emision: string;
    fecha_registro: Date;

}