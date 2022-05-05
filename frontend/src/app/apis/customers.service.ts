import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Customer{
  id: string, 
  name: string, 
  /*Related to package booking */
  package: string;
}
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  id = "1";
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"

  constructor(private http:HttpClient) { }

  getTrainerCustomers(){
    return this.http.get<[Customer]>(this.url+"getCustomers.php?user_id="+this.id);
  }
}
