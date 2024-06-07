import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    initForm(){
      if(!this.data){
        this.formGroup = this.formBuilder.group({
          name:["", Validators.required],
          code:["", Validators.required],
          category:["", Validators.required],
          description:["", Validators.required],
          price:["", Validators.required],
          amount:["", Validators.required],
        });
      }else{
        this.formGroup = this.formBuilder.group({
          name:[this.data.name||"", Validators.required],
          code:[this.data.code||"", Validators.required],
          category:[this.data.category||"", Validators.required],
          description:[this.data.description||"", Validators.required],
          price:[this.data.price||"", Validators.required],
          amount:[this.data.amount||"", Validators.required],
        });
      }
    }

}
