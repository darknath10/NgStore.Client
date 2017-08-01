import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup } from '@angular/forms';

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

    newOrder(orderForm: FormGroup): Observable<IOrder> {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(`${this.baseUrl}/orders/new`, JSON.stringify(orderForm.value), options)
                        .map((res: Response) => <IOrder>res.json());
    }
}