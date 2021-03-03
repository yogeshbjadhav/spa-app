import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

 
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms' 
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MyfilterPipe } from './myfilter.pipe';
import { CountFilterPipe } from './count-filter.pipe';
import { GenderfilterPipe } from './genderfilter.pipe';
import { StatusfilterPipe } from './statusfilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    MyfilterPipe,
    CountFilterPipe,
    GenderfilterPipe,
    StatusfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    HttpClientModule,
    FormsModule, BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
