import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosEntity } from './entity/productos.entity';
import { CodigoProductoDto } from 'src/components/productos/dto/codigo_producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductosEntity)
    private productosRepository: Repository<ProductosEntity>
  ) { }


  async retornaProductos(id: CodigoProductoDto): Promise<ProductosEntity> {
    console.log("Prod: ", id);

    const existeproducto = await this.productosRepository.findOneBy({
      codProd: id.codProd.toUpperCase()
    })
    return existeproducto;
  }

  funct_retorna_todos_los_productos(): Promise<ProductosEntity[]> {
    return this.productosRepository.find();
  }

  async createProducto(data: any) {
    console.log("dATA: ", data);

    // Verificar si ya existe un producto con el mismo código
    const productoExistente = await this.productosRepository.findOne({
      where: { codProd: data.codProd },
    });
    // Si el producto ya existe, retornar un mensaje de error
    if (productoExistente) {
      return {
        code: 409,
        msg: `Error: Ya existe un producto con el código ${data.codProd}`,
      };
    }

    // Crear la nueva entidad de producto
    const nuevoProducto = this.productosRepository.create({
      codProd: data.codProd,
      descripcion: 'prueba',
      precio_compra: 0,
      precio_venta: 0,
      existencia: 0,
      iva: data.valor_iva,
      utilidad: 0,
      venta_por_und: false,
      activo: true,
      id_categoria: data.categoria,
      id_proveedor: data.codProv,
      createAt: new Date(),
      updated_at: new Date()
    });
    // Guardar el nuevo producto en la base de datos
    return await this.productosRepository.save(nuevoProducto);
  }




}
