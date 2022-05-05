import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Quote{
  id:number,
  quote : string, 
  person: string
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  constructor(private http:HttpClient) { }
  
  getRandomQuote(){
    return this.http.get<[Quote]>("https://motivational-quote-api.herokuapp.com/quotes/random")
  }
}
