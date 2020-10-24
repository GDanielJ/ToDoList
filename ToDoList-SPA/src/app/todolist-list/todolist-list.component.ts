import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ListItem } from '../_models/list-item';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemService } from '../_services/list-item.service';

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html',
  styleUrls: ['./todolist-list.component.css']
})
export class TodolistListComponent implements OnInit {
  items: ListItem[];
  listsForm: FormGroup;

  constructor(private userService: UserService, private listItemService: ListItemService, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadToDoList();
    this.createListsForm();
  }

  loadToDoList() {
    this.listItemService.getItems(this.authService.decodedToken.nameid).subscribe((items: ListItem[]) => {
      this.items = items;
    }, error => {
      console.log(error);
    });
  }

  // https://coryrylan.com/blog/creating-a-dynamic-checkbox-list-in-angular
  createListsForm() {
    this.listsForm = this.fb.group({
      id: [''],
      itemText: [''],
      created: [''],
      completeBy: [''],
      completed: ['']
    });
  }

  deleteListItem(id: number) {
    this.listItemService.deleteListItem(this.authService.decodedToken.nameid, id).subscribe(() => {
      this.items.splice(this.items.findIndex(m => m.id === id), 1);
      console.log('Item deleted');
    }, error => {
      console.log(error);
    });
  }

}
