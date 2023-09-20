import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paises } from './interfaces/paises';
import { Municipios } from './interfaces/municipios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getPaises(): Observable<Paises[]> {
    return this.http.get<Paises[]>('https://restcountries.com/v3.1/all');
  }

}
