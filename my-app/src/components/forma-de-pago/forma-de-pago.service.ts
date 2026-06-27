import { Injectable } from '@nestjs/common';
import { CreateFormaDePagoDto } from './dto/create-forma-de-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FormaDePago } from './entities/forma-de-pago.entity';
import { Repository } from 'typeorm';


@Injectable()
export class FormaDePagoService {

  constructor(
    @InjectRepository(FormaDePago)
    private repository: Repository<FormaDePago>
  ) { }

  create(createFormaDePagoDto: CreateFormaDePagoDto) {
    return 'This action adds a new formaDePago';
  }

  async findAll() {
    return await this.repository.find();
  }

}
