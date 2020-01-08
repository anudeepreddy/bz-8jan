import { Component, OnInit } from '@angular/core';
import { FetchUsersService } from '../fetch-users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private data:FetchUsersService) { }
users;
  ngOnInit() {
    this.data.getUsers().subscribe(d=>{
      this.users=d;
    })
  }

}
