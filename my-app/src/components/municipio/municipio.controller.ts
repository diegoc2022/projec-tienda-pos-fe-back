import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';

@Controller('municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) { }

  @Post()
  funct_create_municipio_c(@Body() createMunicipioDto: CreateMunicipioDto) {
    return this.municipioService.funct_create_municipio_s(createMunicipioDto);
  }

  @Get()
  funct_retorna_municipio_c() {
    return this.municipioService.funct_retorna_municipio_s();
  }

}
