import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Profile{
  id : string, 
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"

  constructor(private http:HttpClient) { }

  getFullProfile(){
    return this.http.get<[Profile]>(this.url+"profile.php")
  }
}
