export class Product {
  id: Number;
  amount: String;
  product_name: String;
  gender: Number;
  category: String;
  price: String;
  src: String;
  constructor(
    id: Number,
    amount: String,
    product_name: String,
    gender: Number,
    category: String,
    price: String,
    src: String
  ) {
    this.id = id;
    this.amount = amount;
    this.product_name = product_name;
    this.gender = gender;
    this.category = category;
    this.price = price;
    this.src = src;
  }
}
