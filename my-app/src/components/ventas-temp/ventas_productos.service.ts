import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateVentaProductosDto } from 'src/components/ventas-temp/dto/update_ventas.dto';
import { Repository } from 'typeorm';
import { CreateVentasEmpEntity } from './entity/create_venta_emp.entity';



@Injectable()
export class VentasProductosService {
  data_venta: any[] = [];
  constructor(
    @InjectRepository(CreateVentasEmpEntity)
    private ventasRepository: Repository<CreateVentasEmpEntity>
  ) { }

  functRetornaVentasService() {
    return this.ventasRepository.find();
  }

  async functRetornaVentasIdCaja(id: number) {
    return await this.ventasRepository.find({
      where: { id_caja: id }
    })
  }

  async funct_registra_ventas_s(ventaProducto: any[]) {
    const [data] = ventaProducto[0].data;
    const subTotal = data.precio_venta * 1;
    const total_iva = data.precio_venta * data.iva / 100;
    const totalNeto = subTotal + total_iva;
    const create_v = this.ventasRepository.create({
      id_caja: ventaProducto[0].id_caja,
      codProd: data.codProd,
      descripcion: data.descripcion,
      cantidad: 1,
      existencia: data.existencia,
      precio_compra: data.precio_compra,
      precio_venta: data.precio_venta,
      iva: data.iva,
      total_iva: total_iva,
      subtotal: totalNeto,
      vendedor: ventaProducto[0].user,
      sucursal: 1,
      factura: ventaProducto[0].factura,
      estado_venta: 'Abierto',
      num_mes: 6,
      num_year: 2026,
      fecha_registro: new Date()
    });
    return await this.ventasRepository.save(create_v);
  }

  async funct_edita_cantidad_ventas_s(id: number, cod: string, data: UpdateVentaProductosDto) {
    const subTotal = data.precio_venta * data.cantidad;
    const totalIva = subTotal * data.iva / 100;
    const totalNeto = subTotal + totalIva
    return await this.ventasRepository.update({ id: id, codProd: cod }, {
      cantidad: data.cantidad,
      total_iva: totalIva,
      subtotal: totalNeto
    });
  }

  async funct_elimina_item_ventas(id: number, cod: string) {
    return await this.ventasRepository.delete({ id: id, codProd: cod });
  }

  async funct_elimina_id_ventas(data: any[]) {
    return await data.map(resp => {
      this.ventasRepository.delete({ id: resp.id });
    })
  }

  async funt_retorna_ventas_facturas(id: any) {
    return await this.ventasRepository.find({
      where: {
        factura: id
      }
    })
  }

  async funt_elima_ventas_temporal_s() {
    return await this.ventasRepository.clear();
  }

  async funct_close_ventas_s(data: any[]) {
    return await data.map(resp => {
      this.ventasRepository.update({ id: resp.id }, { estado_venta: 'cerrado' });
    })
  }

}
