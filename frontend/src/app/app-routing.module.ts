import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'edit-profile-pop',
    loadChildren: () => import('./pages/edit-profile-pop/edit-profile-pop.module').then( m => m.EditProfilePopPageModule)
  },
  {
    path: 'view-total-fees',
    loadChildren: () => import('./pages/view-total-fees/view-total-fees.module').then( m => m.ViewTotalFeesPageModule)
  },
  {
    path: 'attendance-form',
    loadChildren: () => import('./pages/attendance-form/attendance-form.module').then( m => m.AttendanceFormPageModule)
  },
  {
    path: 'modal', 
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'reminder', 
    loadChildren: () => import('./pages/reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
