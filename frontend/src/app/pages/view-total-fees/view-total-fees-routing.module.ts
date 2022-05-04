import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTotalFeesPage } from './view-total-fees.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTotalFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTotalFeesPageRoutingModule {}
