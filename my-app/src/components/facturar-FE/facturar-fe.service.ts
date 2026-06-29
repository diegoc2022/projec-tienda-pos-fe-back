import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { log } from 'node:console';

@Injectable()
export class FacturarFeService {
  totales: any[] = [];
  totaBase: number = 0;
  subTotal: number = 0;
  totalNeto: number = 0;

  constructor(
    private readonly httpService: HttpService,
  ) { }

  async funct_generate_factura_fe_s(data: any[]) {
    const dataJson = data[0];
    const dataCliente = data[0].data_cliente[0];
    const dataVenta = data[0].data_venta;

    this.totales = [];
    for (let index = 0; index < dataVenta.length; index++) {
      this.totaBase += Number(dataVenta[index].precio_venta);
      this.subTotal += Number(dataVenta[index].total_sin_iva);
      this.totalNeto += Number(dataVenta[index].total_neto);
    }


    const body = {
      "number": dataJson.num_factura,
      "type_document_id": 1,
      "date": dataJson.fecha_emision,
      "time": dataJson.hora_emision,
      "invoice_template": "3",
      "template_token": "b82b068d4f8d8074e3a0aacd2a2ad8126a4fc5e26ea74808cd207a519c09fa65",
      "resolution_number": "18760000001",
      "prefix": "SETP",
      "actividadeconomica": "6201",
      "disable_confirmation_text": true,
      "establishment_name": "CASTAÑO SALDARRIAGA DIEGO ALBERTO",
      "establishment_address": "CALLE 57DD # 22B - 87",
      "establishment_phone": "3214556952",
      "establishment_municipality": 1,
      "establishment_email": "diegocastanoaj@gmail.com",
      "sendmail": true,
      "sendmailtome": false,
      "customer": {
        "identification_number": dataCliente.ident,
        "name": dataCliente.nombre_cliente,
        "phone": dataCliente.telefono,
        "address": dataCliente.direccion,
        "email": dataCliente.correo,
        "merchant_registration": "0000000-00",
        "type_document_identification_id": dataCliente.tipo_identificacion,
        "type_organization_id": dataCliente.tipo_organizacion,
        "type_liability_id": dataCliente.tipo_responsabilidad,
        "municipality_id": dataCliente.id_municipio,
        "type_regime_id": dataCliente.tipo_regimen,
        "tax_id": 1
      },
      "payment_form": [
        {
          "payment_form_id": dataJson.forma_pago,
          "duration_measure": "30",
          "payment_due_date": dataJson.fecha_emision,
          "payment_method_id": 30
        }
      ],
      "allowance_charges": [
        {
          "discount_id": 1,
          "charge_indicator": false,
          "allowance_charge_reason": "DESCUENTO GENERAL",
          "amount": "50000.00",
          "base_amount": "1000000.00"
        }
      ],
      "legal_monetary_totals": {
        "line_extension_amount": this.totaBase.toFixed(2),
        "tax_exclusive_amount": this.subTotal.toFixed(2),
        "tax_inclusive_amount": this.totalNeto.toFixed(2),
        "allowance_total_amount": "0",
        "payable_amount": this.totalNeto.toFixed(2)
      },
      "tax_totals":
        [
          {
            "tax_id": 1,
            "tax_amount": "159663.865",
            "percent": "19",
            "taxable_amount": "840336.134"
          }
        ],
      "invoice_lines": dataVenta.map((producto: any) => ({
        unit_measure_id: 70,
        invoiced_quantity: producto.cantidad,
        line_extension_amount: producto.subtotal,
        free_of_charge_indicator: false,
        tax_totals: [
          {
            tax_id: 1,
            tax_amount: producto.total_iva,
            taxable_amount: producto.subtotal,
            percent: producto.iva
          }
        ],
        description: producto.descripcion,
        notes: "ESTA ES UNA PRUEBA DE NOTA DE DETALLE DE LINEA.",
        code: producto.codProd,
        type_item_identification_id: 4,
        price_amount: producto.precio_venta,
        base_quantity: producto.cantidad
      }))
    }

    console.log("Body: ", body);


    /* const response = await firstValueFrom(
      this.httpService.post('http://108.181.191.228:8081/api/ubl2.1/invoice', body,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "host": "apidian2026-8.oo",
            "Authorization": `Bearer ${process.env.API_TOKEN}`
          }
        }
      )
    ); */

    return;
  }

  findAll() {
    return `This action returns all facturarFe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturarFe`;
  }

  update(id: number, data: any) {
    return `This action updates a #${id} facturarFe`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturarFe`;
  }
}
