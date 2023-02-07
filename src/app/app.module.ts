import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersComponent } from './components/users/users.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes=[
  {path:'login_route', component:LoginComponent},
  {path:'users_route', component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    UsersComponent,
    PaquetesComponent,
    CashRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
