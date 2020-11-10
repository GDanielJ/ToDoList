import { Routes } from '@angular/router';
import { TodolistListComponent } from './todolist-list/todolist-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { EditTodolistItemComponent } from './edit-todolist-item/edit-todolist-item.component';
import { EditItemResolver } from './_resolvers/edit-item.resolver';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './_resolvers/edit-user.resolver';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'todolists', component: TodolistListComponent },
      { path: 'edititem/:id', component: EditTodolistItemComponent, resolve: { itemForEdit: EditItemResolver } },
      { path: 'edituser/:id', component: EditUserComponent, resolve: { userForEdit: EditUserResolver } },
      { path: '', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

