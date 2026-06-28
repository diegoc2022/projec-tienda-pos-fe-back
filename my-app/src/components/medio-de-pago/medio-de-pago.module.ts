import { Module } from '@nestjs/common';
import { MedioDePagoService } from './medio-de-pago.service';
import { MedioDePagoController } from './medio-de-pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedioDePago } from './entities/medio-de-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedioDePago])],
  controllers: [MedioDePagoController],
  providers: [MedioDePagoService],
})
export class MedioDePagoModule { }
