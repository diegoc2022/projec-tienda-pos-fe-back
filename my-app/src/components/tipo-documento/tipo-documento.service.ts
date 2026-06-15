import { Injectable } from '@nestjs/common';
import { CreateTipoDocumentoDto } from './dto/create-tipo-identificacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDocumento } from './entities/tipo-identificacion.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TipoIdentificacionService {

  constructor(
    @InjectRepository(TipoDocumento)
    private repository: Repository<TipoDocumento>
  ) { }

  create(createTipoIdentificacionDto: CreateTipoDocumentoDto) {
    return 'This action adds a new tipoIdentificacion';
  }

  funct_retorna_tipo_documento_s() {
    return this.repository.find();
  }

}
