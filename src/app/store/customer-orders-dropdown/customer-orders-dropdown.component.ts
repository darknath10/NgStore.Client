import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { StoreService } from '../services/store.service';

import { IOrder } from '../models/order.model';

@Component({
  selector: 'customer-orders-dropdown',
  templateUrl: './customer-orders-dropdown.component.html',
  styleUrls: ['./customer-orders-dropdown.component.css']
})
export class CustomerOrdersDropdownComponent {
  @Input() customerId: number;
  orders: IOrder[];
  @Output() orderSelected = new EventEmitter<IOrder>();

  constructor(private store: StoreService) {}

  ngOnChanges() {
    this.store.getCustomerOrders(this.customerId).subscribe(data => this.orders = data);
  }

  selectOrder(order: IOrder) {
    this.orderSelected.emit(order);
  }
}
