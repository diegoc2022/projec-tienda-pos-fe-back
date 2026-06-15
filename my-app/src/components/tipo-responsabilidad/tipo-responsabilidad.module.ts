import { Module } from '@nestjs/common';
import { TipoResponsabilidadService } from './tipo-responsabilidad.service';
import { TipoResponsabilidadController } from './tipo-responsabilidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoResponsabilidad } from './entities/tipo-responsabilidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoResponsabilidad])],
  controllers: [TipoResponsabilidadController],
  providers: [TipoResponsabilidadService],
})
export class TipoResponsabilidadModule { }
