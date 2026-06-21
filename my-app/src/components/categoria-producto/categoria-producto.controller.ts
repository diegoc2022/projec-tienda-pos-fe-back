import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaProductoService } from './categoria-producto.service';
import { CreateCategoriaProductoDto } from './dto/create-categoria-producto.dto';
import { UpdateCategoriaProductoDto } from './dto/update-categoria-producto.dto';

@Controller('categoria')
export class CategoriaProductoController {
  constructor(private readonly categoria: CategoriaProductoService) { }

  @Post()
  funct_create_categoria_producto_c(@Body() createCategoriaProductoDto: CreateCategoriaProductoDto) {
    return this.categoria.funct_create_categoria_producto_s(createCategoriaProductoDto);
  }

  @Get()
  funct_retorna_categoria_priducto_c() {
    return this.categoria.funct_retorna_categoria_priducto_s();
  }
}
