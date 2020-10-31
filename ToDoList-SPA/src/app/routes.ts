import { Routes } from '@angular/router';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { EditTodolistItemComponent } from './edit-todolist-item/edit-todolist-item.component';
import { EditItemResolver } from './_resolvers/edit-item.resolver';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { // Denna är egentligen onödig (bara ett "child" just nu), men blir användbart när man har många komponenter
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'todolists', component: TodolistListComponent },
      { path: 'edititem/:id', component: EditTodolistItemComponent, resolve: { itemForEdit: EditItemResolver } }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

