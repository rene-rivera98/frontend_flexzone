import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
user:User= {
  name: 'René',
  apellidoPaterno: 'Rivera',
  apellidoMaterno: 'Montalvo',
  password: 'sdcd99xd',
  idrol: 1,
  email: 'rkjbrcrc@gmail.com',
  fechaNacimiento: '189716872',
  celular: 287323723
}
constructor() { }



public getUser(): Observable<User>{
  return of(this.user);

}

}