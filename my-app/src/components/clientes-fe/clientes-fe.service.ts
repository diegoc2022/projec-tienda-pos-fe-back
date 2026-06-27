import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesFeEntity } from './entity/clientes-fe.entity';
import { Repository } from 'typeorm';
import { ClientesFeDto } from './dto/clientes.dto';
import { format } from 'date-fns';


@Injectable()
export class ClientesService {
    fecha_actual: Date = new Date();
    constructor(
        @InjectRepository(ClientesFeEntity)
        private repository: Repository<ClientesFeEntity>
    ) { }

    async funct_registra_clientes_s(data: any) {
        const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
        const result = await this.repository.find({
            where: {
                ident: data.ident
            }
        })

        if (result.length > 0) {
            return {
                status: 409,
                msg: 'Ya existe un registro con estas misma caracteristicas'
            }
        } else {
            return this.repository.save({
                ident: data.ident,
                tipo_identificacion: data.tipo_ident,
                nombre_cliente: data.nombre.toUpperCase(),
                id_municipio: data.munic,
                telefono: data.telef,
                correo: data.correo,
                tipo_organizacion: data.tipo_org,
                tipo_resposabilidad: data.tipo_resp,
                tipo_regimen: data.tipo_reg,
                created_at: fecha
            });
        }

    }

    async funct_retorna_clientes_s() {
        return await this.repository.find();
    }


    async funct_retorna_one_cliente_s(data: any) {
        const result = await this.repository.find({
            where: {
                ident: data
            }
        })

        if (result.length < 1) {
            return {
                status: 409,
                msg: 'Cliente no existe, debe crearlo primero por el formulario de clientes'
            }
        }

        return result;
    }

}
