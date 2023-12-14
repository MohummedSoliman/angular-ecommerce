import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  getProductList(theCategoryId: number): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(
        `${this.baseUrl}/products/search/findByCategoryId?id=${theCategoryId}`
      )
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetProductCategoriesResponse>(`${this.baseUrl}/productCategories`)
      .pipe(map((response) => response._embedded.productCategories));
  }
}
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}

interface GetProductCategoriesResponse {
  _embedded: {
    productCategories: ProductCategory[];
  };
}
