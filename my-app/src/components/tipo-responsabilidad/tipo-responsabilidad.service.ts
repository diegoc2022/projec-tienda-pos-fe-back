import { Injectable } from '@nestjs/common';
import { CreateTipoResponsabilidadDto } from './dto/create-tipo-responsabilidad.dto';
import { UpdateTipoResponsabilidadDto } from './dto/update-tipo-responsabilidad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoResponsabilidad } from './entities/tipo-responsabilidad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoResponsabilidadService {

  constructor(
    @InjectRepository(TipoResponsabilidad)
    private repository: Repository<TipoResponsabilidad>
  ) { }

  create(createTipoResponsabilidadDto: CreateTipoResponsabilidadDto) {
    return 'This action adds a new tipoResponsabilidad';
  }

  funct_retorna_tipo_responsabilidad_s() {
    return this.repository.find();
  }

}
