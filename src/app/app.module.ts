import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/administrator/nav-bar.component';
import { UsersComponent } from './components/users/users.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardGuard } from 'app/auth-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const appRoutes: Routes=[
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent,canActivate:[AuthGuardGuard]},
  {path: 'datatable', component:UsersComponent,canActivate:[AuthGuardGuard]}
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
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
