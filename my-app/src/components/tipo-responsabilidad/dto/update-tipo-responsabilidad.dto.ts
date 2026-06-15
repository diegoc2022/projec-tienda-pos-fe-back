import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoResponsabilidadDto } from './create-tipo-responsabilidad.dto';

export class UpdateTipoResponsabilidadDto extends PartialType(CreateTipoResponsabilidadDto) {}
