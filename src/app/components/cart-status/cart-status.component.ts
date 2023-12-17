import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { take } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [CartService],
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css',
})
export class CartStatusComponent implements OnInit {
  totalPriceValue: number = 0;
  totalQuantityValue: number = 0;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPriceValue = data;
    });

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantityValue = data)
    );
  }
}
