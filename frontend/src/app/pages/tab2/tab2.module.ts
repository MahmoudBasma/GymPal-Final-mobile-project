import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
registerLocaleData(localeDe);
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
