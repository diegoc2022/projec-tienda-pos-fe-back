import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoriaProductoDto } from './dto/create-categoria-producto.dto';
import { CategoriaProducto } from './entities/categoria-producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaProductoService {

  constructor(
    @InjectRepository(CategoriaProducto)
    private categoria: Repository<CategoriaProducto>
  ) { }

  funct_create_categoria_producto_s(data: CreateCategoriaProductoDto) {
    return 'This action adds a new categoriaProducto';
  }

  async funct_retorna_categoria_priducto_s() {
    return this.categoria.find();
  }
}
