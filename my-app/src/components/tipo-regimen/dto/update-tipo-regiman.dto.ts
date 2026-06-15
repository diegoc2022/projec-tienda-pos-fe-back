import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoRegimanDto } from './create-tipo-regiman.dto';

export class UpdateTipoRegimanDto extends PartialType(CreateTipoRegimanDto) {}
