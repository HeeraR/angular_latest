import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    const usersFromStorage = localStorage.getItem('users');
    if (usersFromStorage) {
      this.users = JSON.parse(usersFromStorage) as User[];
    }
  }
}
