import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CodigoProductoDto } from 'src/components/productos/dto/codigo_producto.dto';

@Controller('productos')
export class ProductosController {
    constructor(
        private productoServices: ProductosService,
    ) { }

    @Get(':id')
    async retornaProductos(@Param('id') id: CodigoProductoDto) {
        return await this.productoServices.retornaProductos(id);
    }

    @Get()
    funct_retorna_todos_los_productos() {
        return this.productoServices.funct_retorna_todos_los_productos();
    }

    @Post()
    async createProducto(@Body() createProductoDto: any) {
        return await this.productoServices.createProducto(createProductoDto);
    }
}
