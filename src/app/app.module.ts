import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';
import { ViewallComponent } from './viewall/viewall.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { SearchComponent } from './search/search.component';
=======
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    NavbarComponent,
    UpdateComponent,
    ViewallComponent,
    RegisterComponent,
<<<<<<< HEAD
    SearchComponent,
=======
>>>>>>> f0e8fed4e0db25eecdf568b6adc7b34b8df42948
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
