import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Duenio } from '../clases/duenio';

@Injectable({
  providedIn: 'root'
})

export class DuenioService {

  private url:string='http://localhost:8080/duenios'
  
  constructor(private http:HttpClient) { }

  getDuenioList():Observable<Duenio[]>{
    return this.http.get<Duenio[]>(this.url)
  }
}
