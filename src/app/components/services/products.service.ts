import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:5000/api/product';

  constructor(private http: HttpClient) {}

  //Conexion con la API de backend
  URL = 'http://localhost:5000/api/product';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, { product });
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(this.URL + '/'+id);
}
}
