import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ListItem } from '../_models/list-item';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent implements OnInit {
  items: ListItem[];

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadToDoList();
  }

  loadToDoList() {
    this.userService.getItems(this.authService.decodedToken.nameid).subscribe((items: ListItem[]) => {
      this.items = items;
    }, error => {
      console.log(error);
    });
  }

}
