import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Qualification{
  Q_id:string,
  TrainerID:string, 
  certificate: string,
  Year:string,
  source:string;

}
@Injectable({
  providedIn: 'root'
})
export class QualificationsService {
  id = "1";
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"

  constructor(private http: HttpClient) { }

  getAllQualifications(){
    return this.http.get<[Qualification]>(this.url+"qualifications.php?user_id="+this.id)
  }

  addQualification(q:Qualification ){
    console.log(q);
    return this.http.post(this.url+"addQualification.php", JSON.stringify(q));
  }
}