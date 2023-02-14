import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Newuser } from 'app/interfaces/newuser';
import { newUserService } from 'app/services/new_users.service';

@Component({
  selector: 'app-create_user',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.css']
})
export class newUserComponent implements OnInit {
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  password: string = '';
  idrol: string = '';
  email: string = '';
  fechaNacimiento = '';
  celular = '';
  newUserForm!: FormGroup;
  signninIn2: boolean = false;
  body2: Newuser = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    password: '',
    idrol: '',
    email: '',
    fechaNacimiento: '',
    celular: ''
  };
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: newUserService,
    private router: Router
  ) {}

  ngOnInit() {
      this.newUserForm = this.formBuilder.group({
      nombre: [, [Validators.required]],
      apellidoPaterno: [, [Validators.required]],
      apellidoMaterno: [, [Validators.required]],
      password: [, [Validators.required]],
      idrol: [, [Validators.required]],
      email: [, [Validators.required]],
      fechaNacimiento: [, [Validators.required]],
      celular: [, [Validators.required]],
    });
  }
  get Nombre(){
    return this.newUserForm.get('nombre');
  }
  get ApellidoPaterno(){
    return this.newUserForm.get('apellidoPaterno');
  }
  get ApellidoMaterno(){
    return this.newUserForm.get('apellidoMaterno');
  }
  get Password(){
    return this.newUserForm.get('password');
  }
  get IdRol(){
    return this.newUserForm.get('idrol');
  }
  get Email(){
    return this.newUserForm.get('email');
  }
  get FechaNacimiento(){
    return this.newUserForm.get('fechaNacimiento');
  }

  get Celular(){
    return this.newUserForm.get('celular');
  }

  onSubmit() {
    console.log('suvmited');
    if (this.newUserForm.invalid) {
      console.log('invalid');
      return;
    } else {
      this.signninIn2 = true;
      this.body2.nombre = this.Nombre!.value;
      this.body2.apellidoPaterno = this.ApellidoPaterno!.value;
      this.body2.apellidoMaterno = this.ApellidoPaterno!.value;
      this.body2.password = this.Password!.value;
      this.body2.idrol = this.IdRol!.value;
      this.body2.email = this.Email!.value;
      this.body2.fechaNacimiento = this.FechaNacimiento!.value;
      this.body2.celular = this.Celular!.value;

      console.log(this.body2);
      this.auth.getAccessToken(this.body2).subscribe((res) => {
        console.log(res);
        if (res.token) {
          const token:string=res.token
          localStorage.setItem('credentials',token)
          this.router.navigate(['/']);
        }
      });
      /*     this.authenticationSvc.signIn(this.body)
      .subscribe((result:any)=>{
        this.signninIn=false;
        if(result){

        }else{

          console.log(result?.ExternalMessage, 'Error de autenticación')
        }
      }) */
    }
  }


}
