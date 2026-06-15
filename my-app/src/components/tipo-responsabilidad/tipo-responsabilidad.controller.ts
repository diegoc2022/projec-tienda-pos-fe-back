import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoResponsabilidadService } from './tipo-responsabilidad.service';
import { CreateTipoResponsabilidadDto } from './dto/create-tipo-responsabilidad.dto';
import { UpdateTipoResponsabilidadDto } from './dto/update-tipo-responsabilidad.dto';

@Controller('tipo-responsabilidad')
export class TipoResponsabilidadController {
  constructor(private readonly tipoResponsabilidadService: TipoResponsabilidadService) { }

  @Post()
  create(@Body() createTipoResponsabilidadDto: CreateTipoResponsabilidadDto) {
    return this.tipoResponsabilidadService.create(createTipoResponsabilidadDto);
  }

  @Get()
  funct_retorna_tipo_responsabilidad_c() {
    return this.tipoResponsabilidadService.funct_retorna_tipo_responsabilidad_s();
  }

}
