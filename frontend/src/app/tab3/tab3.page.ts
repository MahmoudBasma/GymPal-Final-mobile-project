import { Component } from '@angular/core';
import { Fee, FeesService } from '../apis/fees.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fees: Fee[];
  total = 0;

  constructor(private Fservice:FeesService) {}

  ngOnInit(){
    this.Fservice.getAllFees().subscribe(response => {
      this.fees = response;
      console.log(this.fees);
      this.total=this.fees[this.fees.length-1]["SUM(Amount)"];
      console.log("total fees "+this.fees[this.fees.length-1]["SUM(Amount)"]);
    })
  }
  
  

}
