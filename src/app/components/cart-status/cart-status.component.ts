import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CartService],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css',
})
export class CartStatusComponent {
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(public cartServcie: CartService) {}

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartServcie.totalPrice.subscribe((data) => (this.totalPrice = data));

    this.cartServcie.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }
}
