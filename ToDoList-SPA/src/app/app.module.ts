import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodolistListComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
