import { Injectable } from '@nestjs/common';
import { CreateTipoRegimanDto } from './dto/create-tipo-regiman.dto';
import { UpdateTipoRegimanDto } from './dto/update-tipo-regiman.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoRegimen } from './entities/tipo-regiman.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoRegimenService {

  constructor(
    @InjectRepository(TipoRegimen)
    private repository: Repository<TipoRegimen>
  ) { }

  create(createTipoRegimanDto: CreateTipoRegimanDto) {
    return 'This action adds a new tipoRegiman';
  }

  funct_retorna_tipo_regiment_s() {
    return this.repository.find();
  }

}
