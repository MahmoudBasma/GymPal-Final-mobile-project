import { Component, OnInit , Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {AnyForUntypedForms, NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profile-pop',
  templateUrl: './edit-profile-pop.page.html',
  styleUrls: ['./edit-profile-pop.page.scss'],
})


export class EditProfilePopPage implements OnInit {

  spec: any;
  certificate: any;
  year:any;
  party:any;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  update(){
    console.log(this.spec);
  }

  add(){
    console.log(this.year);
  }

  async close() {
    this.modalCtr.dismiss();
  }

}
