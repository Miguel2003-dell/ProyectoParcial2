import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit{

  formGroup!: FormGroup

  constructor(public dialogRef: MatDialogRef<ProductListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder){

    }
    ngOnInit(): void {
    }

    onSave() {
      this.dialogRef.close(true);
    }
  
    onCancel() {
      this.dialogRef.close(false);
    }
}
