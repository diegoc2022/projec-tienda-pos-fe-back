import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientesService } from './clientes-fe.service';
import { ClientesFeDto } from './dto/clientes.dto';

@Controller('clientes-fe')
export class ClientesController {
    constructor(
        private service: ClientesService
    ) { }

    @Post()
    async funct_registra_clientes_c(@Body() data: any) {
        return await this.service.funct_registra_clientes_s(data);
    }

    @Get()
    async funct_retorna_clientes_c() {
        return await this.service.funct_retorna_clientes_s();
    }

    @Get(':id')
    async funct_retorna_one_clientes_c(@Param('id') data: any) {
        return await this.service.funct_retorna_one_cliente_s(data);
    }

}
