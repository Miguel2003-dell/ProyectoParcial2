import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  productList: any[] = [];
  filteredProductList: any[] = [];
  cart: any[] = [];

  constructor(public dialog: MatDialog, private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts();
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

  addToCart(product: any): void {
    this.cart.push(product);
    console.log('Producto agregado al carrito:', product);
  }

  editDialog(product: any): void {
    // Implementa la lógica para editar el producto
  }

  deleteDialog(productId: any): void {
    // Implementa la lógica para eliminar el producto
  }
}
