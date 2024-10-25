import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createDuenio(data: Duenio): Observable<Duenio> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Duenio>(this.url, data, { headers });
  }

  updateDuenio(id: number, data: Duenio): Observable<Duenio> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Duenio>(`${this.url}/${id}`, data, { headers });
  }

  deleteDuenio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  getDuenio(id: number): Observable<Duenio> {
    return this.http.get<Duenio>(`${this.url}/${id}`);
  }
}
