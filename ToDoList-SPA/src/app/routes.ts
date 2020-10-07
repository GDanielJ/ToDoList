import { Routes } from '@angular/router';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { // Denna är egentligen onödig (bara ett "child" just nu), men blir användbart när man har många komponenter
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'todolists', component: TodolistListComponent }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

