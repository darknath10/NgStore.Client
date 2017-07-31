import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICustomer } from '../models/customer.model';
import { IOrder } from '../models/order.model';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  customers: ICustomer[];
  currentCustomer: ICustomer;
  currentOrder: IOrder;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.customers = data['customers']); 
  }

  setCurrentCustomer(cust: ICustomer) {
    this.currentOrder = null;
    this.currentCustomer = cust;
  }

  setCurrentOrder(order: IOrder) {
    this.currentOrder = order;
  }

}
