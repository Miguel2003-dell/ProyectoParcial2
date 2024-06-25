import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../../Products/confirmacion/confirmacion.component';
import { User } from 'src/app/model/user';
import { UsuariosFormComponent } from '../usuarios-form/usuarios-form.component';
import { UsuariosService } from '../../services/users/usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  userList!: MatTableDataSource<User>;
  columnsHeader = ["date", "username", "name", "lastName", "email", "phone", "status", "role", "opciones"]


  constructor(private userService: UsuariosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.UserListMethod();
  }

  UserListMethod() {
    try {
      this.userService.getUsers()
        .subscribe(item => this.userList = new MatTableDataSource(item))

    } catch (error) {
      console.log(error)
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.userList.filter=filterValue.trim();
    
    }

    openDialog() {
      const dialogRef = this.dialog.open(UsuariosFormComponent, {
        data: null,
      });

      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
        if (result){
          this.UserListMethod();
        }
      });
    }

    editDialog(element:User) {
      const dialogRef = this.dialog.open(UsuariosFormComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
        if (result){
          this.UserListMethod();
        }
      });
    }

    deleteDialog(element:User) {
      const dialogRef = this.dialog.open(ConfirmacionComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
        if (result){
          this.UserListMethod();
        }
      });
    }
}
