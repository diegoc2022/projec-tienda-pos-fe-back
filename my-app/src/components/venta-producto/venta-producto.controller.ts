import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrecioVentasService } from './venta-producto.service';
import { EditaProductoDto } from 'src/components/venta-producto/dto/edita-precios.dto';

@Controller('venta-producto')
export class PrecioVentasController {
    constructor(
        private ventasServices: PrecioVentasService,
    ) { }

    @Get(':id')
    async funt_retorna_productos_por_id_c(@Param('id') id: string) {
        return await this.ventasServices.funt_retorna_productos_por_id_s(id);
    }

    @Get()
    async funct_retorna_productos_c() {
        return await this.ventasServices.funct_retorna_productos_s();
    }


    @Patch(':cod')
    async funct_edita_precio_ventas_c(@Param('cod') cod: string, @Body() data: EditaProductoDto) {
        return await this.ventasServices.funct_edita_precio_ventas_s(cod, data);
    }

    @Post()
    async funct_registra_productos_c(@Body() data: any) {
        return await this.ventasServices.funct_registra_productos_s(data);
    }

    @Delete(':cod')
    async funct_elimina_productos_c(@Param('cod') cod: any) {
        return await this.ventasServices.funct_elimina_producto_s(cod)
    }

    @Patch('precioCompras/:id')
    async functedita_precio_compra_c(@Param('id') id: any, @Body() precio: EditaProductoDto) {
        return await this.ventasServices.funct_edita_precio_compras_s(id, precio);
    }

    @Patch('producto/:id')
    async funct_edita_codig_nombre_producto_c(@Param('id') id: any, @Body() data: EditaProductoDto) {
        return await this.ventasServices.funct_edita_nombre_producto_s(id, data);
    }

    @Patch('activar/:id')
    async funct_activa_asociacion_unidad(@Param('id') id: any, @Body() check: EditaProductoDto) {
        return await this.ventasServices.funct_activa_asociacion_unidad(id, check);
    }

    @Patch('cantidad/:id')
    async funct_edita_existencia_c(@Param('id') id: any, @Body() cant: EditaProductoDto) {
        return await this.ventasServices.funct_edita_existencia_s(id, cant);
    }

    @Patch('codigo/:id')
    async funct_edita_producto_c(@Param('id') id: string, @Body() codigo: EditaProductoDto) {
        return await this.ventasServices.funct_edita_codigo_nombre_producto_s(id, codigo);
    }

}
