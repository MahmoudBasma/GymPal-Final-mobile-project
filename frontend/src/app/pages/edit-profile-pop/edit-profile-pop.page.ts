import { Component, OnInit , Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile-pop',
  templateUrl: './edit-profile-pop.page.html',
  styleUrls: ['./edit-profile-pop.page.scss'],
})
export class EditProfilePopPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async close() {
    this.modalCtr.dismiss();
  }

}
