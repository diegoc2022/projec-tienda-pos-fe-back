import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImpuestosService } from './impuestos.service';

@Controller('impuestos')
export class ImpuestosController {
  constructor(private readonly impuestosService: ImpuestosService) { }

  @Get()
  funct_retorna_impuestos_c() {
    return this.impuestosService.funct_retorna_impuestos_s();
  }

}
