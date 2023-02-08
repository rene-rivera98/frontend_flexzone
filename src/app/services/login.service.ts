import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) {
  console.log('Hola')
}

getLoginUser(){
  let heades = new Headers()
    .set('Type-content','aplication/json')
}

getAccessToken(body:any){
  this.http.post(environment.UrlAPI+'auth',body)
}
}
