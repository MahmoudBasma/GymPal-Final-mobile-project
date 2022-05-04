import { Component } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { ProfileService, Profile } from '../apis/profile.service';
import { QualificationsService , Qualification} from '../apis/qualifications.service';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  profile: Profile[];
  qualifications: Qualification[];

  constructor(private Pservice: ProfileService, private Qservice: QualificationsService) {}

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
}
