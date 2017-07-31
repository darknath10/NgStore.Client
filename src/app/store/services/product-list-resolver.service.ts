import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { StoreService } from './store.service';

import { IProduct } from '../models/product.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductListResolver implements Resolve<IProduct[]> {
    constructor(private store: StoreService) {}

    resolve(): Observable<IProduct[]> {
        return this.store.getProducts();
    }
}