
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(public router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === this.username && u.password === this.password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/users']);
    } else {
      alert('Invalid credentials');
    }
  }
}
