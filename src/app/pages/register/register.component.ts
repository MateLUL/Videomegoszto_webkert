import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl,
    username: new FormControl,
    password: new FormControl,
    password_re: new FormControl
  })
  constructor(private router: Router) {}

  register() {
    if (true) {
      this.router.navigateByUrl('/main');
    } else {
      console.log("Hibás adatokat adtál meg");
    }
  }

  onRegistration() {
    console.log("siker");
  }
}
