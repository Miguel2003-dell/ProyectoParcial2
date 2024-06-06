import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod(): void {
    try {
      this.productService.getProducst().subscribe((items: Product[]) => {
        this.productList = items;
        items.forEach((item) => console.log(item)); // Agregar console.log() aquí
      });
    } catch (error) {
      console.log(error);
    }
  }
}
