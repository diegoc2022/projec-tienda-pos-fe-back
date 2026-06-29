import { Module } from '@nestjs/common';
import { FacturarFeService } from './facturar-fe.service';
import { FacturarFeController } from './facturar-fe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturarFe } from './entities/facturar-fe.entity';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [
    TypeOrmModule.forFeature([FacturarFe]),
    HttpModule
  ],
  controllers: [FacturarFeController],
  providers: [FacturarFeService],
})
export class FacturarFeModule { }
