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
    const searchUrl: string = `${this.baseUrl}/products/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProduct(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    const searchUrl: string = `${this.baseUrl}/productCategories`;

    return this.httpClient
      .get<GetProductCategoriesResponse>(searchUrl)
      .pipe(map((response) => response._embedded.productCategories));
  }

  getProductByKeyword(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/products/search/findByNameContaining?name=${keyword}`;

    return this.getProduct(searchUrl);
  }

  private getProduct(url: string): Observable<Product[]> {
    return this.httpClient
      .get<GetProductsResponse>(url)
      .pipe(map((response) => response._embedded.products));
  }
}
interface GetProductsResponse {
  _embedded: {
    products: Product[];
  };
}

interface GetProductCategoriesResponse {
  _embedded: {
    productCategories: ProductCategory[];
  };
}
