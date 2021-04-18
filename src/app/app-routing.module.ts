import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'viewProfile', component: ProfileComponent },
  {path: 'updateProfile', component: UpdateComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
