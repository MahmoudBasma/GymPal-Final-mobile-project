import { Component , OnInit, Input } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { ProfileService, Profile } from '../apis/profile.service';
import { QualificationsService , Qualification} from '../apis/qualifications.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
  profile: Profile[];
  qualifications: Qualification[];
  @Input() model_title: string;
  constructor(private Pservice: ProfileService, private Qservice: QualificationsService
    ,private modalController: ModalController) {}

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
  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}
