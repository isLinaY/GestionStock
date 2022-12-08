import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Femme } from '../Model/femme.model';

@Injectable({
  providedIn: 'root'
})
export class FemmeService {

  private baseURL = "http://localhost:8080/femme";

  constructor(private httpClient: HttpClient) { }

  getProduitFList(): Observable<Femme[]>{
    return this.httpClient.get<Femme[]>(`${this.baseURL}/all`);
  }

  createProduitF(femme: Femme): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, femme);
  }

  getProduitFById(id: number): Observable<Femme>{
    return this.httpClient.get<Femme>(`${this.baseURL}/${id}`);
  }

  updateProduitF(id: number, femme: Femme): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, femme);
  }

  deleteProduitF(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
