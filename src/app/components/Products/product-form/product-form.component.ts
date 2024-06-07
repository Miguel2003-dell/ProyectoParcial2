import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  formGroup!: FormGroup

  constructor(public dialogRef: MatDialogRef<ProductListComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder){

    }

}
