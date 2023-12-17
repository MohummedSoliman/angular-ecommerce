import { Product } from './product';

export class CartItem {
  private id: number;
  private unitPrice: number;
  private name: string;
  private imageUrl: string;
  private quantitiy: number;

  constructor(product: Product) {
    this.id = product.id;
    this.unitPrice = product.unitPrice;
    this.name = product.name;
    this.imageUrl = product.imageUrl;

    this.quantitiy = 1;
  }
}
