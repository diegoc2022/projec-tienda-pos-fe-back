import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoOrganizacionService } from './tipo-organizacion.service';
import { CreateTipoOrganizacionDto } from './dto/create-tipo-organizacion.dto';
import { UpdateTipoOrganizacionDto } from './dto/update-tipo-organizacion.dto';

@Controller('tipo-organizacion')
export class TipoOrganizacionController {
  constructor(private readonly tipoOrganizacionService: TipoOrganizacionService) { }

  @Post()
  create(@Body() createTipoOrganizacionDto: CreateTipoOrganizacionDto) {
    return this.tipoOrganizacionService.create(createTipoOrganizacionDto);
  }

  @Get()
  funct_retorna_tipo__organizacion_c() {
    return this.tipoOrganizacionService.funct_retorna_tipo__organizacion_s();
  }

}
