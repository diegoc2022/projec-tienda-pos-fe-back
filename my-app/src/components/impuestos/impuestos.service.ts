import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Impuesto } from './entities/impuesto.entity';

@Injectable()
export class ImpuestosService {

  constructor(
    @InjectRepository(Impuesto)
    private repository: Repository<Impuesto>
  ) { }

  async funct_retorna_impuestos_s() {
    return await this.repository.find();
  }

}
