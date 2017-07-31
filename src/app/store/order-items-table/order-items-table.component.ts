import { Component, OnChanges, Input } from '@angular/core';

import { StoreService } from '../services/store.service';

import { IOrderItem } from '../models/order-item.model';

@Component({
  selector: 'order-items-table',
  templateUrl: './order-items-table.component.html',
  styleUrls: ['./order-items-table.component.css']
})
export class OrderItemsTableComponent implements OnChanges {
  @Input() orderId: number;
  orderItems: IOrderItem[];

  constructor(private store: StoreService) {}

  ngOnChanges() {
    this.store.getOrderItems(this.orderId).subscribe(data => this.orderItems = data);
  }
}
