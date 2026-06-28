import { Controller, Get, Post, Body } from '@nestjs/common';
import { MedioDePagoService } from './medio-de-pago.service';
import { CreateMedioDePagoDto } from './dto/create-medio-de-pago.dto';

@Controller('medio-de-pago')
export class MedioDePagoController {
  constructor(private readonly formaDePagoService: MedioDePagoService) { }

  @Post()
  create(@Body() createFormaDePagoDto: CreateMedioDePagoDto) {
    return this.formaDePagoService.create(createFormaDePagoDto);
  }

  @Get()
  findAll() {
    return this.formaDePagoService.findAll();
  }

}
