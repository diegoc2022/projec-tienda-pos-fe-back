import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoRegimenService } from './tipo-regimen.service';
import { CreateTipoRegimanDto } from './dto/create-tipo-regiman.dto';
import { UpdateTipoRegimanDto } from './dto/update-tipo-regiman.dto';

@Controller('tipo-regimen')
export class TipoRegimenController {
  constructor(private readonly tipoRegimenService: TipoRegimenService) { }

  @Post()
  create(@Body() createTipoRegimanDto: CreateTipoRegimanDto) {
    return this.tipoRegimenService.create(createTipoRegimanDto);
  }

  @Get()
  funct_retorna_tipo_regiment_c() {
    return this.tipoRegimenService.funct_retorna_tipo_regiment_s();
  }

}
