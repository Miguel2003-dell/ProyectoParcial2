import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';
import { ProductsService } from '../../services/products.service';
import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: MatTableDataSource<Product>;
  columnsHeader=["date","name","price","amount","status","opciones"]
  
  
  constructor(private productService:ProductsService,
  public dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
  this.productListMethod();
  }
  
  productListMethod(){
  try{
  this.productService.getProducts()
  .subscribe(item => this.productList= new MatTableDataSource(item))
  
  }catch(error){
  console.log(error)
  }
  
  }
  
  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  
  this.productList.filter=filterValue.trim();
  
  }
    openDialog() {
      const dialogRef = this.dialog.open(ProductFormComponent, {
        data: null,
      });

      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
        if (result){
          this.productListMethod();
        }
      });
    }
    editDialog(element:Product) {
      const dialogRef = this.dialog.open(ProductFormComponent, {
        data: element,
      });

      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
        if (result){
          this.productListMethod();
        }
      });
    }
}
