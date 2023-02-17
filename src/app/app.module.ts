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
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { newUserComponent} from './components/create_user/create_user.component';
import { NavbarUsersComponent } from './components/navbar-users/navbar-users.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes=[
  {path:'login', component:LoginComponent},
  {path: 'admin', component:NavBarComponent},
  {path:'', component:LoginComponent,canActivate:[AuthGuardGuard]},
  {path: 'datatable', component:UsersComponent},
  {path: 'createuser', component:newUserComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    UsersComponent,
    PaquetesComponent,
    CashRegisterComponent,
    newUserComponent,
    NavbarUsersComponent
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
    MatPaginatorModule,
    CommonModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
