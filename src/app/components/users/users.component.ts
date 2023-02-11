import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'app/interfaces/user';
import { UsersService } from 'app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  dataSource:any;
  obtenido: Promise<boolean> | undefined;


  constructor(private UserService: UsersService){

  }
  async ngOnInit() {
   const response= await this.UserService.getUserList()
    this.dataSource=new MatTableDataSource<any>(response.usuarios)
    console.log(this.dataSource)
    this.obtenido=Promise.resolve(true)
  }


  displayedColumns: string[] = ['nombre', 'paterno', 'materno', 'celular', 'fecha'];

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}

