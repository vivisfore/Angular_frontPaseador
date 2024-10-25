import { Component, OnInit } from '@angular/core';
import { Duenio } from '../../clases/duenio';
import { DuenioService } from '../../servicios/duenio.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duenio',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './duenio.component.html',
  styleUrl: './duenio.component.css'
})
export class DuenioComponent implements OnInit {

  id: string | null = null;
  duenioForm: FormGroup;

  constructor(
    private duenioServicio:DuenioService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){
    this.duenioForm = this.formBuilder.group({
      documento: ['', this.id ? Validators.required : null],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.getDuenio();
    }
  }

  getDuenio() {
    this.duenioServicio.getDuenio(Number(this.id)).subscribe({
      next: response => {
        this.duenioForm.patchValue(response);
      },
      error: error => {
        console.error('There was an error with the GET request!', error);
      }
    });
  }

  updateDuenio() {
    const id = Number(this.id);
    const body = this.duenioForm.value;

    this.duenioServicio.updateDuenio(id, body).subscribe({
      next: response => {
        console.log('PUT request successful!', response);
      },
      error: error => {
        console.error('There was an error with the PUT request!', error);
      },
    });
  }

  deleteDuenio() {
    const duenioId = 1;

    /*this.duenioServicio.deleteDuenio(duenioId).subscribe(
      response => {
        console.log('DELETE request successful!', response);
      },
      error => {
        console.error('There was an error with the DELETE request!', error);
      }
    );*/
  }

  createDuenio() {
    const body = this.duenioForm.value;
    this.duenioServicio.createDuenio(body).subscribe({
      next: response => {
        console.log('POST request successful!', response);
      },
      error: error => {
        console.error('There was an error with the POST request!', error);
      }
    });
  }

  onSubmit() {
    if(this.id){
      this.updateDuenio();
    } else {
      this.createDuenio();
    }
  }
}
