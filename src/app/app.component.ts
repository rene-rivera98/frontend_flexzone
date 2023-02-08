import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexzone_frontend';

  constructor(private loginService: LoginService){

  }
}
