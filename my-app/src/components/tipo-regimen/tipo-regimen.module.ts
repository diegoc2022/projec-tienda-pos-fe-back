import { Module } from '@nestjs/common';
import { TipoRegimenService } from './tipo-regimen.service';
import { TipoRegimenController } from './tipo-regimen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoRegimen } from './entities/tipo-regiman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoRegimen])],
  controllers: [TipoRegimenController],
  providers: [TipoRegimenService],
})
export class TipoRegimenModule { }
