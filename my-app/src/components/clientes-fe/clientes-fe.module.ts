import { Module } from '@nestjs/common';
import { ClientesService } from './clientes-fe.service';
import { ClientesController } from './clientes-fe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesFeEntity } from './entity/clientes-fe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesFeEntity])],
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule { }
