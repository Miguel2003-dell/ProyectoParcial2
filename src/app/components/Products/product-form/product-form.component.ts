import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initForm();
  }



  initForm() {
    if (!this.data) {
      this.formGroup = this.formBuilder.group({
        name: ["", Validators.required],
        code: ["", Validators.required],
        category: ["", Validators.required],
        description: ["", Validators.required],
        price: ["", [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],  // acepta números con hasta dos decimales
        amount: ["", [Validators.required, Validators.pattern(/^\d+$/)]],  // acepta solo números enteros
      });
    } else {
      this.formGroup = this.formBuilder.group({
        name: [this.data.name || "", Validators.required],
        code: [this.data.code || "", Validators.required],
        category: [this.data.category || "", Validators.required],
        description: [this.data.description || "", Validators.required],
        price: [this.data.price || "", Validators.required],
        amount: [this.data.amount || "", Validators.required],
      });
    }
  }


  submit(): void {
    let request = {
      id: this.data != null ? this.data._id : null,
      name: this.formGroup.value.name,
      code: this.formGroup.value.code,
      category: this.formGroup.value.category,
      price: this.formGroup.value.price,
      amount: this.formGroup.value.amount,
      description: this.formGroup.value.description
    }
    try {
      if (this.formGroup.valid) {
        console.log(this.formGroup.value);
        if (!this.data) {
          // Agregar producto
          this.productService.createProduct(request)
            .subscribe(
              response => {
                console.log('Producto agregado:', response);
                this.dialogRef.close();
              },
              error => {
                console.error('Error al agregar el producto:', error);
              }
            );
        } else {
          this.productService.editProduct(request)
            .subscribe(
              response => {
                console.log('Producto editado:', response);
                this.dialogRef.close();
              },
              error => {
                console.error('Error al editar el producto:', error);
              }
            );
        }
        this.dialogRef.close(true)//cerrar modal
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}



