import { Module } from '@nestjs/common';
import { TipoRegimenService } from './tipo-regimen.service';
import { TipoRegimenController } from './tipo-regimen.controller';

@Module({
  controllers: [TipoRegimenController],
  providers: [TipoRegimenService],
})
export class TipoRegimenModule {}
