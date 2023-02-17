import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { singInBody } from 'app/interfaces/body';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginForm!: FormGroup;
  signninIn: boolean = false;
  body: singInBody = {
    username: '',
    password: '',
  };
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: LoginService,
    private router: Router,
     private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [, [Validators.required]],
      password: [, [Validators.required]],
    });
  }
  get Username() {
    return this.loginForm.get('username');
  }
  get Password() {
    return this.loginForm.get('password');
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('suvmited');
    if (this.loginForm.invalid) {
      console.log('invalid');
      return;
    } else {
      this.signninIn = true;
      this.body.username = this.Username!.value;
      this.body.password = this.Password!.value;
      console.log(this.body);
      this.auth.getAccessToken(this.body).subscribe((res: any) => {console.log(res); this.toastr.success(res.msg)
        if (res.token) {
          const token:string=res.token
          localStorage.setItem('credentials',token)
          this.router.navigate(['/']);
        }
      });
      }

  }
}

