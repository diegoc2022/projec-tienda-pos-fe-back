import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormaDePagoService } from './forma-de-pago.service';
import { CreateFormaDePagoDto } from './dto/create-forma-de-pago.dto';

@Controller('forma-de-pago')
export class FormaDePagoController {
  constructor(private readonly formaDePagoService: FormaDePagoService) { }

  @Post()
  create(@Body() createFormaDePagoDto: CreateFormaDePagoDto) {
    return this.formaDePagoService.create(createFormaDePagoDto);
  }

  @Get()
  funct_retorna_forma_de_pago_c() {
    return this.formaDePagoService.funct_retorna_forma_de_pago_s();
  }

}
