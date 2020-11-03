import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-todolist-item',
  templateUrl: './edit-todolist-item.component.html',
  styleUrls: ['./edit-todolist-item.component.css']
})
export class EditTodolistItemComponent implements OnInit {

  itemForEdit: ListItem;
  editItemForm: FormGroup;


  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.itemForEdit = data['itemForEdit'];
    });

    this.createEditItemForm();
  }

  createEditItemForm() {
    let dateCompleteBy = new Date(this.itemForEdit.completeBy);

    this.editItemForm = this.fb.group({
      itemText: [this.itemForEdit.itemText],
      completeBy: [dateCompleteBy],
      completed: [this.itemForEdit.completed]
    });
  }

  updateItem() { // TODO - Fixa den här funktionen (obs kolla så att API-updaten funkar). Snygga till html. Completed fungerar inte, Invalid date. Har med ngx-bootsrap att göra.

  }

}
