import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userc:any={
  }
  constructor(public UserService:UsersService) {
    this.UserService.getUser().subscribe((user)=>{console.log(JSON.stringify(user));this.userc=user})
   }

  ngOnInit() {
   
  }

}