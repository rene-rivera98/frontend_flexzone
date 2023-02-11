import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http:HttpClient) {
  console.log('Hola 2')
}

getUserList():Observable<any>{
  console.log('extracted users')

  const token=localStorage.getItem('credentials');

  let heades = new HttpHeaders()
    .set('Type-content','aplication/json')
    .set('Authorization', token!)

  return this.http.get(environment.UrlAPI+'/users',{headers: heades})
}

}
