import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { ViewallComponent } from './viewall/viewall.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { SearchComponent } from './search/search.component';
=======
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'home', component:NavbarComponent},
  { path: 'viewProfile', component: ProfileComponent },
<<<<<<< HEAD
  { path: 'updateProfile', component: UpdateComponent},
  { path: 'search', component: SearchComponent},
  { path: 'logout', component: LoginComponent},
  { path: 'viewAll', component: ViewallComponent},
  { path: 'register', component: RegisterComponent}
=======
  {path: 'updateProfile', component: UpdateComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'viewAll', component: ViewallComponent},
  {path: 'register', component: RegisterComponent}
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
