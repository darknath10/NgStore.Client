import { IProduct } from './product.model';

export interface IOrderItem {
    id: number,
    unitPrice?: number,
    quantity: number,
    product: IProduct,
    productId?: any
}