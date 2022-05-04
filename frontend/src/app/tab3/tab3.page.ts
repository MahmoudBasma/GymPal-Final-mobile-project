import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Fee, FeesService } from '../apis/fees.service';
import { ViewTotalFeesPage } from '../pages/view-total-fees/view-total-fees.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  modalDataResponse: any;

  fees: Fee[];
  total: number[];
  
  constructor(private Fservice:FeesService, 
    public modalCtrl: ModalController) {}

  ngOnInit(){
    this.Fservice.getAllFees().subscribe(response => {
      this.fees = response;
      console.log(this.fees);
      this.total= [this.fees[this.fees.length-1]["SUM(Amount)"]];
    })
  }
  async initModal() {
    const modal = await this.modalCtrl.create({
      component: ViewTotalFeesPage,
      componentProps: {
        'fee':this.fees[this.fees.length-1]["SUM(Amount)"] 
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
