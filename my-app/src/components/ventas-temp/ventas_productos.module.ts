import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasProductosController } from './ventas_productos.controller';
import { VentasProductosService } from './ventas_productos.service';
import { CreateVentasEmpEntity } from './entity/create_venta_emp.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CreateVentasEmpEntity])],
    controllers: [
        VentasProductosController,
    ],
    providers: [
        VentasProductosService,
    ],
})
export class VentasProductosModule { }
