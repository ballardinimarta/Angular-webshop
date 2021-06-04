import { Orderrow } from "./OrderRow";

export class Order {
    id: number;
    companyId: number = 117;
    created: Date = new Date(Date.now());
    createdBy:string;
    paymentMethod: string;
    totalPrice: number;
    status: number = 1;
    orderRows: Orderrow[];
}
