import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
<<<<<<< HEAD
    
=======
    NavbarComponent
>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    NgbModule
>>>>>>> f19184561d5351b702c276b1eff6b178ef3e8313
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
