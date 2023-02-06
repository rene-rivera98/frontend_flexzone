import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo = 'Agregar nuevo usuario';
  message = '';
  register= false;

  username:string=''
  id_user:number=0
  email:string=''
  date_birth:string=''
  area:string=''
  password:string=''
  confirm_password:string=''

  constructor() { }

  ngOnInit() {
  }

  user_register(){
    this.register=true;
    this.message="Usuario registrado con exito.";
  }
}
