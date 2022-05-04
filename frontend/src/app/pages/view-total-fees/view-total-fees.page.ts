import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-total-fees',
  templateUrl: './view-total-fees.page.html',
  styleUrls: ['./view-total-fees.page.scss'],
})
export class ViewTotalFeesPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  async close() {
    this.modalCtr.dismiss();
  }

}
