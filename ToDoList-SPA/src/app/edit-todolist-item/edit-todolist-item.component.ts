import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todolist-item',
  templateUrl: './edit-todolist-item.component.html',
  styleUrls: ['./edit-todolist-item.component.css']
})
export class EditTodolistItemComponent implements OnInit {

  itemForEdit: ListItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.itemForEdit = data['itemForEdit'];
    });
  }

}
