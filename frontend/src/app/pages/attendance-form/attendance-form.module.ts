import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendanceFormPageRoutingModule } from './attendance-form-routing.module';

import { AttendanceFormPage } from './attendance-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendanceFormPageRoutingModule
  ],
  declarations: [AttendanceFormPage]
})
export class AttendanceFormPageModule {}
