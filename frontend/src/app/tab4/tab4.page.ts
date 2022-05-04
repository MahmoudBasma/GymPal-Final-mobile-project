import { Component } from '@angular/core';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { ProfileService, Profile } from '../apis/profile.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  profile: Profile[];
  constructor(private service: ProfileService) {}

  ngOnInit(){
    this.service.getFullProfile().subscribe(response => {
      this.profile = response;
      console.log(this.profile);
    })
  }
}
