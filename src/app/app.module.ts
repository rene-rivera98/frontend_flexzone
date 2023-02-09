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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'app/auth-guard.guard';

const appRoutes: Routes=[
  {path:'login', component:LoginComponent,},
  {path:'', component:NavBarComponent,canActivate:[AuthGuardGuard]}
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
