import { Component, OnInit } from '@angular/core';
import { Duenio } from '../../clases/duenio';
import { DuenioService } from '../../servicios/duenio.service';
import { RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';

type ConsumoData = {
  meses: string[];
  consumo: number[];
}

@Component({
  selector: 'app-duenios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './duenios.component.html',
  styleUrl: './duenios.component.css'
})
export class DueniosComponent implements OnInit {

  duenio:Duenio[]=[]
  barChart: any;

  constructor(private duenioServicio:DuenioService){}

  /*
  Tabla - Consumo por mes

  columns: pais, mes, consumo, year

  Colombia, Enero, 100, 2021
  Colombia, Febrero, 200, 2021

  SELECT mes FROM consumo WHERE pais = 'Colombia' AND year = 2021
  SELECT consumo FROM consumo WHERE pais = 'Colombia' AND year = 2021

  data1 = [
  {
    mes: 'Enero'
    }
  ]

  data2 = [
  {
    consumo: 'Enero'
    }
  ]

  {
    meses: data1,
    consumo: data2
  }

  */
  ngOnInit(): void {
    this.listaDuenio()
    const data = {
      consumo: [
        {
          mes: 'Enero',
          pais: 'Argentina',
          consumo: 10
        },
        {
          mes: 'Febrero',
          pais: 'Argentina',
          consumo: 50
        },
        {
          mes: 'Marzo',
          pais: 'Argentina',
          consumo: 100
        },
        {
          mes: 'Abril',
          pais: 'Argentina',
          consumo: 1
        }
      ]
    }
    const dataNormalizadaMes = data.consumo.map((item) => {
      return item.mes;
    });

    const dataNormalizadaConsumo = data.consumo.map((item) => {
      return item.consumo;
    })

    this.graphBar({
      meses: dataNormalizadaMes,
      consumo: dataNormalizadaConsumo
    });
  }

  graphBar(dataNormalizada: ConsumoData){
    this.barChart = new Chart('barChart', {
      type: 'line',
      data: {
        labels: dataNormalizada.meses,
        datasets: [{
          label: 'Duenios',
          data: dataNormalizada.consumo,
          fill: false,
          borderColor: '#4bc0c0',
          tension: 0.1
        }]
      }
  });
  }

  listaDuenio(){
    this.duenioServicio.getDuenioList().subscribe(
      data => {
        this.duenio=data
        console.log(this.duenio)
      }
    )
  }

  borrarDuenio(id:string){
    const duenioId = Number(id);
    this.duenioServicio.deleteDuenio(duenioId).subscribe(
      data => {
        console.log(data)
        this.listaDuenio()
      }
    )
  }
}
