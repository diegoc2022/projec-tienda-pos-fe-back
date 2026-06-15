import { Injectable } from '@nestjs/common';
import { CreateTipoOrganizacionDto } from './dto/create-tipo-organizacion.dto';
import { UpdateTipoOrganizacionDto } from './dto/update-tipo-organizacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoOrganizacion } from './entities/tipo-organizacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoOrganizacionService {

  constructor(
    @InjectRepository(TipoOrganizacion)
    private repository: Repository<TipoOrganizacion>
  ) { }

  create(createTipoOrganizacionDto: CreateTipoOrganizacionDto) {
    return 'This action adds a new tipoOrganizacion';
  }

  funct_retorna_tipo__organizacion_s() {
    return this.repository.find();
  }

}
