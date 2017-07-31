import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';

import { StoreService } from './services/store.service';
import { CustomerListResolver } from './services/customer-list-resolver.service';
import { ProductListResolver } from './services/product-list-resolver.service';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomersDropdownComponent } from './customers-dropdown/customers-dropdown.component';
import { CustomerOrdersDropdownComponent } from './customer-orders-dropdown/customer-orders-dropdown.component';
import { OrderItemsTableComponent } from './order-items-table/order-items-table.component';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreRoutingModule
  ],
  declarations: [
    OrderDetailsComponent,
    CustomersDropdownComponent, 
    CustomerOrdersDropdownComponent, 
    OrderItemsTableComponent, 
    NewOrderComponent
  ],
  providers: [
    StoreService,
    CustomerListResolver,
    ProductListResolver
  ]
})
export class StoreModule { }
