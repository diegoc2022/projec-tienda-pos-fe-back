import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoIdentificacionService } from './tipo-documento.service';
import { CreateTipoDocumentoDto } from './dto/create-tipo-identificacion.dto';

@Controller('tipo-identificacion')
export class TipoDocumentoController {
  constructor(private readonly tipoIdentificacionService: TipoIdentificacionService) { }

  @Post()
  create(@Body() createTipoIdentificacionDto: CreateTipoDocumentoDto) {
    return this.tipoIdentificacionService.create(createTipoIdentificacionDto);
  }

  @Get()
  funct_retorna_tipo_documento_c() {
    return this.tipoIdentificacionService.funct_retorna_tipo_documento_s();
  }
}
