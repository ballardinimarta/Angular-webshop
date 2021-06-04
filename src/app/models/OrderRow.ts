import { Product } from "./Product";

export class Orderrow {
    productId: number;
    product: null;
    amount: number;
    orderId: number;
    constructor(productId: number, product:null, amount: number, orderId: number) {
        this.productId = productId;
        this.product = product;
        this.amount = amount;
        this.orderId = orderId;
    }
}