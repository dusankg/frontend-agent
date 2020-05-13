import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login/login.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {Interceptor} from './interceptor/Interceptor';
import { AddCarComponent } from './addCar/addCar.component';
import {AddCarService} from './addCar/addCar.service';
import { EnterOccupationComponent } from './enter-occupation/enter-occupation.component';
import { EnterOccupationService } from './enter-occupation/enterOccupation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddCarComponent,
    EnterOccupationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      AppRoutingModule,
    ],
  providers: [LoginService, AddCarService, EnterOccupationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
