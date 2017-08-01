import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListResolver } from './services/customer-list-resolver.service';
import { ProductListResolver } from './services/product-list-resolver.service';
import { AuthGuard } from '../user/services/auth-guard.service';
import { NewOrderGuard } from './services/new-order-guard.service';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewOrderComponent } from './new-order/new-order.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderDetailsComponent,
    resolve: { customers: CustomerListResolver },
    canActivate: [AuthGuard]
  },
  {
    path: 'neworder',
    component: NewOrderComponent,
    resolve: { customers: CustomerListResolver, products:  ProductListResolver },
    canActivate: [AuthGuard],
    canDeactivate: [NewOrderGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
