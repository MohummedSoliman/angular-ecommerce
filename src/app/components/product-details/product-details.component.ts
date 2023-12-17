import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartItem } from '../../model/cart-item';
import { Product } from '../../model/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [ProductService, CartService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product;
  testedValue: number = 0;

  constructor(
    public productService: ProductService,
    public route: ActivatedRoute,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    const hasProductId = this.route.snapshot.paramMap.has('id');

    if (hasProductId) {
      const productId: number = +this.route.snapshot.paramMap.get('id')!;
      this.productService
        .getProductDetails(productId)
        .subscribe((data) => (this.product = data));
    }
  }

  addToCart() {
    const cartItem: CartItem = new CartItem(this.product);

    this.cartService.addToCart(cartItem);
  }
}
