import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

    readonly fundsURL;

  constructor(private http: HttpClient) { 
    this.fundsURL = 'http://localhost:8082/api/funds'; 
  }

  getFunds(): Observable<any> {
    return this.http.get(`${this.fundsURL}`);
  }

  getFund(id: number): Observable<any> {
    return this.http.get(`${this.fundsURL}/${id}`);
  }

  add(info: any): Observable<any> {
    return this.http.post(`${this.fundsURL}`, info);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.fundsURL}/${id}`);
  }

  updateFund(fund: Fund): Observable<any> {
    return this.http.patch(`${this.fundsURL}/${fund.id}`, fund);
  }
}
