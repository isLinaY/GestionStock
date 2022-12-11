import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Homme } from '../Model/homme.model';
@Injectable({
  providedIn: 'root'
})
export class HommeService {

  private baseURL = "http://localhost:8080/homme";

  constructor(private httpClient: HttpClient) { }

  getProduitHList(): Observable<Homme[]>{
    return this.httpClient.get<Homme[]>(`${this.baseURL}/all`);
  }

  createProduitH(homme: Homme): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, homme);
  }

  getProduitHById(id: number): Observable<Homme>{
    return this.httpClient.get<Homme>(`${this.baseURL}/${id}`);
  }

  updateProduitH(id: number, homme: Homme): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, homme);
  }

  deleteProduitH(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}
