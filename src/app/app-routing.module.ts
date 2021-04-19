import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ViewallComponent } from './viewall/viewall.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'home', component:NavbarComponent},
  { path: 'viewProfile', component: ProfileComponent },
  {path: 'updateProfile', component: UpdateComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'viewAll', component: ViewallComponent},
  {path: 'register', component: RegisterComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
