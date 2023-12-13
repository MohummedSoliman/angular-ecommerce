export class Product {
  constructor(
    public sku: string,
    public name: string,
    public description: string,
    public imageUrl: string,
    public unitPrice: number,
    public active: boolean,
    public unitsInStock: number,
    public dateCreated: Date,
    public dateUpdated: Date
  ) {}
}
