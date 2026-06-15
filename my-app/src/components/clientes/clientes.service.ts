import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from './entity/clientes.entity';
import { Repository } from 'typeorm';
import { ClientesDto } from './dto/clientes.dto';
import { format } from 'date-fns';


@Injectable()
export class ClientesService {
    fecha_actual: Date = new Date();
    constructor(
        @InjectRepository(ClientesEntity)
        private repository: Repository<ClientesEntity>
    ) { }

    async funct_registra_clientes_s(data: ClientesDto) {
        const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
        const result = await this.repository.find({
            where: {
                cedula: data.cedula
            }
        })

        if (result.length > 0) {
            return {
                status: 409,
                msg: 'Ya existe un registro con estas misma caracteristicas'
            }
        } else {
            return this.repository.save({
                cedula: data.cedula,
                tipo_identificacion: data.tipo_identificacion,
                nombre_cliente: data.nombre_cliente.toUpperCase(),
                id_municipio: data.id_municipio,
                telefono: data.telefono,
                correo: data.correo,
                tipo_organizacion: data.tipo_organizacion,
                tipo_resposabilidad: data.tipo_resposabilidad,
                tipo_regimen: data.tipo_regimen,
                created_at: fecha
            });
        }

    }

    async funct_retorna_clientes_s() {
        return await this.repository.find();
    }


    async funct_retorna_one_cliente_s(data: any) {
        return await this.repository.find({
            where: {
                cedula: data
            }
        })
    }

}
