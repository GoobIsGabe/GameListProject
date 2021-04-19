import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ViewallComponent } from './viewall/viewall.component';

const routes: Routes = [
  { path: 'viewProfile', component: ProfileComponent },
  {path: 'updateProfile', component: UpdateComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'viewAll', component: ViewallComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
