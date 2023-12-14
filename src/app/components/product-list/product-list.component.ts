import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  currentCategoryId: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.currentCategoryId = 1;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }

    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }
}
