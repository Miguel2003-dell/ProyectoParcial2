import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../../services/products/products.service';
import { VentasService } from '../../services/ventas/ventas.service';
import { Product } from 'src/app/model/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  productList: any[] = [];
  filteredProductList: any[] = [];
  card: Product[] = [];
  totalSum: number = 0;

  constructor(
    public dialog: MatDialog, 
    private productService: ProductsService, 
    private ventasService: VentasService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.ventasService.getProductSale().subscribe(products => {
      this.card = products;
      this.total();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.productList = products;
      this.filteredProductList = [...this.productList];
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProductList = this.productList.filter(product => 
      product.name.toLowerCase().includes(filterValue)
    );
  }

  openDialog(): void {
    // Implementa la lógica para abrir un diálogo
  }

  addToCart(product: Product){
    this.ventasService.addProductSale(product);
    console.log('Producto agregado al carrito:', product);

  }

  editDialog(product: any): void {
    // Implementa la lógica para editar el producto
  }

  delete(product: Product){
    this.ventasService.deleteProductSale(product._id);
  }
  total(){
    this.ventasService.getProductSale()
    .pipe(map(product=>{
      return product.reduce((suma,variable)=>suma+variable.price,0)
    })).subscribe(valor=>this.totalSum=valor)
  }
}
