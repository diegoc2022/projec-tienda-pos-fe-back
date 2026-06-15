import { Module } from '@nestjs/common';
import { TipoOrganizacionService } from './tipo-organizacion.service';
import { TipoOrganizacionController } from './tipo-organizacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoOrganizacion } from './entities/tipo-organizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoOrganizacion])],
  controllers: [TipoOrganizacionController],
  providers: [TipoOrganizacionService],
})
export class TipoOrganizacionModule { }
