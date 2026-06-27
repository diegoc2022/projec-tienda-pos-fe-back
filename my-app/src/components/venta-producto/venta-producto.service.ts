
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditaProductoDto } from 'src/components/venta-producto/dto/edita-precios.dto';
import { Repository } from 'typeorm';
import { VentaProductoEntity } from './entity/create_venta_producto.entity';

@Injectable()
export class PrecioVentasService {
    constructor(
        @InjectRepository(VentaProductoEntity)
        private ventasRepository: Repository<VentaProductoEntity>
    ) { }

    async retornaPrecioVentas(id: string): Promise<VentaProductoEntity> {

        return await this.ventasRepository.findOne({
            where: {
                codProd: id
            }
        })
    }

    async funct_retorna_productos_s(): Promise<VentaProductoEntity[]> {
        return await this.ventasRepository.find();
    }


    async funct_registra_productos_s(data: any) {
        // Verificar si ya existe un producto con el mismo código
        const productoExistente = await this.ventasRepository.findOne({
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
        const nuevoProducto = this.ventasRepository.create({
            codProd: data.codProd,
            descripcion: data.nombre.toUpperCase(),
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
        return await this.ventasRepository.save(nuevoProducto);
    }

    async funct_elimina_producto_s(data: any) {
        return await this.ventasRepository.delete({ codProd: data })
    }

    async funct_edita_precio_ventas_s(id: any, precio: EditaProductoDto): Promise<VentaProductoEntity> {
        const producto = await this.ventasRepository.findOne({
            where: {
                codProd: id.toUpperCase(),
            },
        });

        if (!producto) {
            throw new NotFoundException(`Producto con código ${id} no encontrado`);
        }
        //const total_unds = producto.existencia + cant.existencia; 
        producto.precio_venta = precio.precio_venta
        producto.updated_at = new Date();
        return await this.ventasRepository.save(producto);
    }

    async funct_edita_precio_compras_s(id: any, precio: EditaProductoDto): Promise<VentaProductoEntity> {
        const producto = await this.ventasRepository.findOne({
            where: {
                codProd: id.toUpperCase(),
            },
        });

        if (!producto) {
            throw new NotFoundException(`Producto con código ${id} no encontrado`);
        }

        //const total_unds = producto.existencia + cant.existencia; 
        producto.precio_compra = precio.precio_compra
        producto.updated_at = new Date();
        return await this.ventasRepository.save(producto);
    }

    async funct_edita_existencia_s(id: any, cant: EditaProductoDto): Promise<VentaProductoEntity> {
        const producto = await this.ventasRepository.findOne({
            where: {
                codProd: id.toUpperCase(),
            },
        });

        if (!producto) {
            throw new NotFoundException(`Producto con código ${id} no encontrado`);
        }
        //const total_unds = producto.existencia + cant.existencia;      
        producto.existencia = cant.existencia;
        producto.updated_at = new Date();
        return await this.ventasRepository.save(producto);
    }

    async funct_edita_nombre_producto_s(id: any, data: EditaProductoDto): Promise<VentaProductoEntity> {
        // Buscar el producto por su código
        const producto = await this.ventasRepository.findOne({
            where: { codProd: id },
        });

        // Si el producto no existe, lanzar una excepción o devolver un mensaje
        if (!producto) {
            throw new NotFoundException(`Producto con código ${id} no encontrado`);
        }
        // Actualizar el nombre del producto
        producto.descripcion = data.descripcion;
        producto.createAt = new Date();
        // Guardar la entidad actualizada
        return await this.ventasRepository.save(producto);
    }

    async funct_activa_asociacion_unidad(id: any, check: EditaProductoDto): Promise<VentaProductoEntity | { status: number; msg: string }> {
        // Buscar el producto por su código
        const producto = await this.ventasRepository.findOne({
            where: { codProd: id },
        });

        // Si el producto no existe, lanzar una excepción o devolver un mensaje
        if (!producto) {
            return {
                status: 409,
                msg: `El producto con código ${id} no existe en la base de datos.`,
            };
        }

        // Actualizar el campo 'venta_por_und' con el nuevo valor
        producto.venta_por_und = check.venta_por_und;
        producto.createAt = new Date();
        // Guardar la entidad actualizada
        return await this.ventasRepository.save(producto);
    }

    async funct_edita_codigo_nombre_producto_s(id: string, codigo: EditaProductoDto): Promise<VentaProductoEntity | { status: number; msg: string }> {

        const producto = await this.ventasRepository.findOne({
            where: { codProd: id },
        });

        if (!producto) {
            throw new NotFoundException(`Producto con código ${id} no encontrado`);
        }
        producto.codProd = codigo.codProd;
        producto.descripcion = codigo.descripcion;
        producto.updated_at = new Date();
        return await this.ventasRepository.save(producto);
    }

}
