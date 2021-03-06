import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './_services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodolistItemComponent } from './edit-todolist-item/edit-todolist-item.component';
import { EditItemResolver } from './_resolvers/edit-item.resolver';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './_resolvers/edit-user.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodolistListComponent,
    HomeComponent,
    RegisterComponent,
    EditTodolistItemComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:44345'],
        disallowedRoutes: ['localhost:44345/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    EditItemResolver,
    EditUserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
