import { Component } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { ProfileService, Profile } from '../apis/profile.service';
import { QualificationsService , Qualification} from '../apis/qualifications.service';
import { ModalController } from '@ionic/angular';
import { EditProfilePopPage } from '../pages/edit-profile-pop/edit-profile-pop.page';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  modalDataResponse: any;

  profile: Profile[];
  qualifications: Qualification[];

  constructor(private Pservice: ProfileService, private Qservice: QualificationsService, 
    public modalCtrl: ModalController) {}

  ngOnInit(){
    this.Pservice.getFullProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    })
    this.Qservice.getAllQualifications().subscribe(response => {
      this.qualifications = response;
      console.log(this.qualifications);
    })
  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: EditProfilePopPage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : '+ modalDataResponse.data);
      }
    });

    return await modal.present();
  }
}
