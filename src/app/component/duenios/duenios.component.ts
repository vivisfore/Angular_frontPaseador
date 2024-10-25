import { Component, OnInit } from '@angular/core';
import { Duenio } from '../../clases/duenio';
import { DuenioService } from '../../servicios/duenio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-duenios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './duenios.component.html',
  styleUrl: './duenios.component.css'
})
export class DueniosComponent implements OnInit {

  duenio:Duenio[]=[]

  constructor(private duenioServicio:DuenioService){}

  ngOnInit(): void {
    this.listaDuenio()
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
