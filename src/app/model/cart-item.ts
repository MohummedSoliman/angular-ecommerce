import { Product } from './product';

export class CartItem {
  id: number;
  unitPrice: number;
  name: string;
  imageUrl: string;
  quantity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.unitPrice = product.unitPrice;
    this.name = product.name;
    this.imageUrl = product.imageUrl;

    this.quantity = 1;
  }
}
