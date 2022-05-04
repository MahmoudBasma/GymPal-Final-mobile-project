import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateSpecialtyService {
  sentData : any;
  private url = "http://10.21.147.46/GymPal-%20Final%20mobile%20project/backend/"

  constructor(private http: HttpClient) { }

  update(id:number, specialty:string){
    this.sentData = {
      'specialty': specialty
    }
    return this.http.post(this.url + "updateSpecialty.php?user_id="+id, JSON.stringify(this.sentData));
  }
}
