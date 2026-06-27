import { Module } from '@nestjs/common';
import { FormaDePagoService } from './forma-de-pago.service';
import { FormaDePagoController } from './forma-de-pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormaDePago } from './entities/forma-de-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FormaDePago])],
  controllers: [FormaDePagoController],
  providers: [FormaDePagoService],
})
export class FormaDePagoModule { }
