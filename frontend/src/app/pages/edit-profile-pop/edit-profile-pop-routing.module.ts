import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilePopPage } from './edit-profile-pop.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfilePopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfilePopPageRoutingModule {}
