import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string=''
  password:string=''

  constructor() { }

  ngOnInit() {
  }

  login(form:NgForm){
    const user=form.value.user;
    const password=form.value.password;
  }
}
