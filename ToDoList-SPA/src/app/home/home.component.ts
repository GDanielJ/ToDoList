import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  loggedIn() { // TODO - Det här är inte bästa sättet. Samma metod finns i Nav.component, men osäker hur lösa just nu!
    return this.authService.loggedIn();
  }
}
