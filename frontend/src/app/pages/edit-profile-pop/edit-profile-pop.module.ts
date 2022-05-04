import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePopPageRoutingModule } from './edit-profile-pop-routing.module';

import { EditProfilePopPage } from './edit-profile-pop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePopPageRoutingModule
  ],
  declarations: [EditProfilePopPage]
})
export class EditProfilePopPageModule {}
