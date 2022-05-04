import { Component } from '@angular/core';
import { Fee, FeesService } from '../apis/fees.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fees: Fee[];

  constructor(private Fservice:FeesService) {}

  ngOnInit(){
    this.Fservice.getAllFees().subscribe(response => {
      this.fees = response;
      console.log(this.fees);
    })
  }
  

}
