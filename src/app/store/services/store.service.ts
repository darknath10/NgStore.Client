import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ICustomer } from '../models/customer.model';
import { IOrder } from '../models/order.model';
import { IOrderItem } from '../models/order-item.model';
import { IProduct } from '../models/product.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
    baseUrl = 'http://localhost:5555/api';

    constructor(private http: Http) {}

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get(`${this.baseUrl}/customers`)
                        .map((res: Response) => <ICustomer[]>res.json());
    }

    getCustomerOrders(customerId: number): Observable<IOrder[]> {
        return this.http.get(`${this.baseUrl}/customers/${customerId}/orders`)
                        .map((res: Response) => <IOrder[]>res.json());
    }

    getOrderItems(orderId: number): Observable<IOrderItem[]> {
        return this.http.get(`${this.baseUrl}/orders/${orderId}/items`)
                        .map((res: Response) => <IOrderItem[]>res.json());
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get(`${this.baseUrl}/products`)
                        .map((res: Response) => <IProduct[]>res.json());
    }
}