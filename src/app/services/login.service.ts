import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'app/interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
http: any;

// constructor(private http:HttpClient) {
//   console.log('Hola')
// }

getLoginUser(){
  let heades = new Headers()
    .set('Type-content','aplication/json')
}

getAccessToken(body:any):Observable<any>{
  console.log('body',body)

 return this.http.post(environment.UrlAPI+'/auth',body)
}
}
