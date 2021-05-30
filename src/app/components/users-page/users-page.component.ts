import { UsersService } from './../../shared/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  loading = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    console.log('Component ngOnInit');

    this.loading = true;
    this.usersService.forTest++;

    this.usersService.loadUsers().subscribe(() => {
      console.log('Test subscribe');
      this.loading = false;
    });
  }

  get users() {
    return this.usersService.users;
  }

  get countInit() {
    return this.usersService.forTest;
  }

}
