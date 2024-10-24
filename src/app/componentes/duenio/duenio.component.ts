import { Component, OnInit } from '@angular/core';
import { Duenio } from '../../clases/duenio';
import { DuenioService } from '../../servicios/duenio.service';

@Component({
  selector: 'app-duenio',
  standalone: true,
  imports: [],
  templateUrl: './duenio.component.html',
  styleUrl: './duenio.component.css'
})
export class DuenioComponent implements OnInit {
  
  duenio:Duenio[]=[]

  constructor(private duenioServicio:DuenioService){}

  ngOnInit(): void {
    this.listaDuenio()
  }

  listaDuenio(){
    this.duenioServicio.getDuenioList().subscribe(
      data=>{
        this.duenio=data
        console.log(this.duenio)
      }
    )
  }
  
}
