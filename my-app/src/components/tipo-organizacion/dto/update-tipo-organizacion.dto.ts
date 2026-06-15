import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoOrganizacionDto } from './create-tipo-organizacion.dto';

export class UpdateTipoOrganizacionDto extends PartialType(CreateTipoOrganizacionDto) {}
