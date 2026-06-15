import { Module } from '@nestjs/common';
import { TipoIdentificacionService } from './tipo-documento.service';
import { TipoDocumentoController } from './tipo-documento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipo-identificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDocumento])],
  controllers: [TipoDocumentoController],
  providers: [TipoIdentificacionService],
})
export class TipoDocumentoModule { }
