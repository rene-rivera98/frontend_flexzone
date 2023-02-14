import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newUserService {

  constructor(private http:HttpClient) {
    console.log('Crear usuarios ejecutandose')
  }

  postNewUser(){
    let heades = new Headers()
      .set('Type-content','aplication/json')
  }

  getAccessToken(body2:any):Observable<any>{
    console.log('body',body2)

  return this.http.post(environment.UrlAPI+'/users',body2)
  }
}
