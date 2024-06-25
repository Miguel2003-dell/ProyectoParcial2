import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user';
import { UsuariosService } from '../../services/users/usuarios.service';


@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UsuariosFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder, 
    private userService: UsuariosService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (!this.data) {
      this.formGroup = this.formBuilder.group({
        username: ["", Validators.required],
        name: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        phone: ["", Validators.required],
        password: ["", Validators.required],
        role: ["", Validators.required],
      });      
    } else {
      this.formGroup = this.formBuilder.group({
        username: [this.data.username || "", Validators.required],
        name: [this.data.name || "", Validators.required],
        lastName: [this.data.lastName || "", Validators.required],
        email: [this.data.email || "", Validators.required],
        phone: [this.data.phone || "", Validators.required],
        password: [this.data.password || "", Validators.required],
        role: [this.data.role || "", Validators.required],
      });
    }
  }

  submit(): void {
    let request = {
      id: this.data != null ? this.data._id : null,
      username: this.formGroup.value.username,
      name: this.formGroup.value.name, 
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      phone: this.formGroup.value.phone,
      password: this.formGroup.value.password,
      role: this.formGroup.value.role
    }

    try {
      if (this.formGroup.valid) {
        console.log(this.formGroup.value);
        if (!this.data) {
          // Agregar usuario
          this.userService.createUser(request)
            .subscribe(
              response => {
                console.log('Usuario agregado:', response);
                this.dialogRef.close();
              },
              error => {
                console.error('Error al agregar el usuario:', error);
              }
            );
        } else {
          this.userService.editUser(request)
            .subscribe(
              response => {
                console.log('Usuario editado:', response);
                this.dialogRef.close();
              },
              error => {
                console.error('Error al editar el usuario:', error);
              }
            );
        }
        this.dialogRef.close(true); // Cerrar modal
      }
    } catch (error) {
      console.log(error);
    }
  }
}
