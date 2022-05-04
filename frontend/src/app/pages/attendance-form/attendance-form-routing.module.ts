import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceFormPage } from './attendance-form.page';

const routes: Routes = [
  {
    path: '',
    component: AttendanceFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceFormPageRoutingModule {}
