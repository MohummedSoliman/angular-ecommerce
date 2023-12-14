import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCategory } from '../../model/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProductCategories();
  }

  listProductCategories() {
    this.productService
      .getProductCategories()
      .subscribe((data) => (this.productCategories = data));
  }
}
