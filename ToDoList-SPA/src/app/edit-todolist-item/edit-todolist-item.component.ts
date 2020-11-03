import { Component, OnInit } from '@angular/core';
import { ListItem } from '../_models/list-item';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { ListItemService } from '../_services/list-item.service';

@Component({
  selector: 'app-edit-todolist-item',
  templateUrl: './edit-todolist-item.component.html',
  styleUrls: ['./edit-todolist-item.component.css']
})
export class EditTodolistItemComponent implements OnInit {

  itemForEdit: ListItem;
  editItemForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private authService: AuthService,
              private listItemService: ListItemService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.itemForEdit = data['itemForEdit'];
    });

    this.createEditItemForm();
  }

  createEditItemForm() {
    let dateCompleteBy = new Date(this.itemForEdit.completeBy);
    let dateCreated = new Date(this.itemForEdit.created);

    this.editItemForm = this.fb.group({
      id: [this.itemForEdit.id],
      itemText: [this.itemForEdit.itemText],
      created: [dateCreated],
      completeBy: [dateCompleteBy],
      completed: [this.itemForEdit.completed]
    });
  }

  updateItem() { // TODO - Snygga till html. Lägg till Validators och en if-sats här så att man bara kan uppdatera om valid.
    this.itemForEdit = Object.assign({}, this.editItemForm.value);
    this.listItemService.updateItem(this.authService.decodedToken.nameid, this.itemForEdit.id, this.itemForEdit).subscribe(() => {
      console.log("Update successful")
    }, error => {
      console.log(error);
    }, () => {
        this.router.navigate(['/todolists']);
    });
  }
}
