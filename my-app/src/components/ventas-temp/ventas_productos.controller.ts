
import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { VentasProductosService } from './ventas_productos.service';

import { UpdateVentaProductosDto } from 'src/components/ventas-temp/dto/update_ventas.dto';

@Controller('ventas-temp')
export class VentasProductosController {
  constructor(
    private ventaservice: VentasProductosService
  ) { }

  @Post()
  async funct_registra_ventas_c(@Body() dataventa: any[]) {
    try {
      return await this.ventaservice.funct_registra_ventas_s(dataventa);
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  }

  @Get()
  async functRetornaVentas() {
    return await this.ventaservice.functRetornaVentasService();
  }

  @Get(':id')
  async functRetornaVentasIdCaja(@Param('id') id: number) {
    return await this.ventaservice.functRetornaVentasIdCaja(id);
  }

  @Get('factura/:id')
  async funt_retorna_ventas_facturas(@Param('id') id: any) {
    return await this.ventaservice.funt_retorna_ventas_facturas(id)
  }

  @Patch(':id/:cod')
  async funct_edita_ventas_c(@Param('id') id: number, @Param('cod') cod: string, @Body() data: UpdateVentaProductosDto) {
    return await this.ventaservice.funct_edita_cantidad_ventas_s(id, cod, data);
  }

  @Delete('item/:id/:cod')
  async funct_elimina_item_ventas(@Param('id') id: number, @Param('cod') cod: string) {
    return await this.ventaservice.funct_elimina_item_ventas(id, cod);
  }

  @Delete('vent/')
  async funct_elimina_id_ventas(@Body() data: any) {
    return await this.ventaservice.funct_elimina_id_ventas(data);
  }

  @Delete('ventas-temp/eliminar-todo')
  async funt_elimina_ventas_temporal_c() {
    return await this.ventaservice.funt_elima_ventas_temporal_s();
  }

  @Put()
  funct_close_ventas_c(@Body() data: any) {
    return this.ventaservice.funct_close_ventas_s(data);
  }

}
