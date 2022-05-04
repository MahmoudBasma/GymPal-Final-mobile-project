import { Component, OnInit , Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AnyForUntypedForms, NgForm} from '@angular/forms';
import { Qualification, QualificationsService } from 'src/app/apis/qualifications.service';

@Component({
  selector: 'app-edit-profile-pop',
  templateUrl: './edit-profile-pop.page.html',
  styleUrls: ['./edit-profile-pop.page.scss'],
})


export class EditProfilePopPage implements OnInit {

  id: any;
  spec: any;
  certificate: any;
  year:any;
  source:any;
  updateJson:any;
  addJson: any;
  qualification: Qualification;

  constructor(private modalCtr: ModalController, 
    private Qservice:QualificationsService) { }

  ngOnInit() {
  }

  update(){
    console.log(this.spec);
  }
  
  add(){
    this.id = 1;
    console.log(this.year);
    this.qualification={
      "Q_id": null,
      "Year":this.year,
      "source": this.source, 
      "TrainerID": this.id, 
      "certificate": this.certificate
    }
    console.log(this.qualification);
   

    this.Qservice.addQualification(this.qualification).subscribe(response =>{
      console.log(response);
    });

  }

  async close() {
    this.modalCtr.dismiss();
  }

}
