import { UsersService } from './../../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  id: string = '';
  user: any = {};
  loading = true;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.usersService.loadUser(this.id).subscribe(user => {
        this.user = user;
        this.loading = false;
      })
    })

  }

}
