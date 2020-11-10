import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  updateUserForm: FormGroup;
  userForEdit: User;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.userForEdit = data['userForEdit'];
    });

    this.createUpdateUserForm();
  }

  createUpdateUserForm() {
    let dateDateofBirth = new Date(this.userForEdit.dateOfBirth);

    this.updateUserForm = this.fb.group({
      city: [this.userForEdit.city, Validators.required],
      country: [this.userForEdit.country, Validators.required],
      dateOfBirth: [dateDateofBirth, Validators.required],
    });
  }

  updateUser() { // TODO - fixa metoder!!

  }

  cancel() {

  }

}
