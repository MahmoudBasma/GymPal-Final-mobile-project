import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTotalFeesPageRoutingModule } from './view-total-fees-routing.module';

import { ViewTotalFeesPage } from './view-total-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTotalFeesPageRoutingModule
  ],
  declarations: [ViewTotalFeesPage]
})
export class ViewTotalFeesPageModule {}
