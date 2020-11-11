import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  updateUserForm: FormGroup;
  userForEdit: User;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.userForEdit = data['userForEdit'];
    });

    this.createUpdateUserForm();
  }

  createUpdateUserForm() {
    let dateDateofBirth = new Date(this.userForEdit.dateOfBirth);

    this.updateUserForm = this.fb.group({
      id: this.userForEdit.id,
      userName: this.userForEdit.userName,
      gender: this.userForEdit.gender,
      city: [this.userForEdit.city, Validators.required],
      country: [this.userForEdit.country, Validators.required],
      dateOfBirth: [dateDateofBirth, Validators.required],
      created: this.userForEdit.created,
      lastActive: this.userForEdit.lastActive
    });
  }

  updateUser() { // TODO - OBS! att skicka id via url är antagligen onödigt i den här metoden (men måste ändras hela vägen till API då)
    if (this.updateUserForm.valid) {
      this.userForEdit = Object.assign({}, this.updateUserForm.value);
      this.userService.updateUser(this.userForEdit.id, this.userForEdit).subscribe(() => {
        console.log("Update successful")
      }, error => {
        console.log(error)
      }, () => {
        this.router.navigate(['/home']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/home']);
  }

}
