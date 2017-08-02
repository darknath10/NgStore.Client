import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../user/services/auth.service';

import { ICustomer } from '../models/customer.model';
import { IOrder } from '../models/order.model';
import { IOrderItem } from '../models/order-item.model';
import { IProduct } from '../models/product.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
    private baseUrl = 'http://localhost:5555/api';
    private headers = new Headers({'Content-Type':'application/json', 'Authorization':`bearer ${this.auth.currentUser.user_token}`});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http, private auth: AuthService) {}

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get(`${this.baseUrl}/customers`, this.options)
                        .map((res: Response) => <ICustomer[]>res.json());
    }

    getCustomerOrders(customerId: number): Observable<IOrder[]> {
        return this.http.get(`${this.baseUrl}/customers/${customerId}/orders`, this.options)
                        .map((res: Response) => <IOrder[]>res.json());
    }

    getOrderItems(orderId: number): Observable<IOrderItem[]> {
        return this.http.get(`${this.baseUrl}/orders/${orderId}/items`, this.options)
                        .map((res: Response) => <IOrderItem[]>res.json());
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get(`${this.baseUrl}/products`, this.options)
                        .map((res: Response) => <IProduct[]>res.json());
    }

    newOrder(orderForm: FormGroup): Observable<IOrder> {
        //let headers = new Headers({'Content-Type':'application/json'});
        //let options = new RequestOptions({headers: headers});

        return this.http.post(`${this.baseUrl}/orders/new`, JSON.stringify(orderForm.value), this.options)
                        .map((res: Response) => <IOrder>res.json());
    }
}