import { Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipio } from './entities/municipio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private repository: Repository<Municipio>
  ) { }

  funct_create_municipio_s(data: CreateMunicipioDto) {
    return 'This action adds a new municipio';
  }

  funct_retorna_municipio_s() {
    return this.repository.find();
  }

}
