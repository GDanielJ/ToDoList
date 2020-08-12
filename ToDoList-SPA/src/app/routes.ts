import { Routes } from '@angular/router';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todolists', component: TodolistListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

