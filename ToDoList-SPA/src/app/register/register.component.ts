import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}; // TODO - byt ut mot user
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      gender: ['male'],
      city: ['', Validators.required],
      country: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  register() { // TODO - kommenterat bort medan bygger en reactive form. Ta bort console.log sedan
    //this.authService.register(this.model).subscribe(() => {
    //  console.log('registration successful');
    //}, error => {
    //    console.log(error);
    //});
    console.log(this.registerForm.value);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }

}
