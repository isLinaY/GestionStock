import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Enfant } from '../Model/enfant.model';
@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  private baseURL = "http://localhost:8080/enfant";

  constructor(private httpClient: HttpClient) { }

  getProduitEList(): Observable<Enfant[]>{
    return this.httpClient.get<Enfant[]>(`${this.baseURL}/all`);
  }

  createProduitE(enfant: Enfant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, enfant);
  }

  getProduitEById(id: number): Observable<Enfant>{
    return this.httpClient.get<Enfant>(`${this.baseURL}/${id}`);
  }

  updateProduitE(id: number, enfant: Enfant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, enfant);
  }

  deleteProduitE(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
