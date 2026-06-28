import { Injectable } from '@nestjs/common';
import { CreateMedioDePagoDto } from './dto/create-medio-de-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MedioDePago } from './entities/medio-de-pago.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MedioDePagoService {

  constructor(
    @InjectRepository(MedioDePago)
    private repository: Repository<MedioDePago>
  ) { }

  create(createFormaDePagoDto: CreateMedioDePagoDto) {
    return 'This action adds a new formaDePago';
  }

  async findAll() {
    return await this.repository.find();
  }

}
