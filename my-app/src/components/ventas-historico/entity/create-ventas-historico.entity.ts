
import { CreateVentasEmpEntity } from "src/components/ventas-temp/entity/create_venta_emp.entity";
import { Entity } from "typeorm";

@Entity({ name: 'tbl_ventas_historico' })
export class VentasHistoricosEntity extends CreateVentasEmpEntity {

}
