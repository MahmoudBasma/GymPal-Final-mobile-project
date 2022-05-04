import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Fee{
  id : string, 
  trainer: string, 
  date: string, 
  customer: string, 
  type: string, 
  amount: string;

}

export interface monthlyFee{
  year: string;
  month: string, 
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"
  constructor(private http:HttpClient) { }

  getAllFees(){
    return this.http.get<[Fee]>(this.url+"fees.php?user_id=1")
  }

  getMonthlyFees(){
    return this.http.get<[monthlyFee]>(this.url+"monthlyFees.php?user_id=1")
  }
}