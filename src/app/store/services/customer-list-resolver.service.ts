import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { StoreService } from './store.service';

import { ICustomer } from '../models/customer.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerListResolver implements Resolve<ICustomer[]> {
    constructor(private store: StoreService) {}

    resolve(): Observable<ICustomer[]> {
        return this.store.getCustomers();
    }
}