import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Qualification{
  Q_id:string
}
@Injectable({
  providedIn: 'root'
})
export class QualificationsService {
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"

  constructor(private http: HttpClient) { }

  getAllQualifications(){
    //ID bug needs fixing 
    return this.http.get<[Qualification]>(this.url+"qualification.php?user_id=1")
  }
}
