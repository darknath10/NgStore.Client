import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from '../services/store.service';
import { TOASTR_TOKEN } from '../../services/toastr.service';

import { ICustomer } from '../models/customer.model';
import { IOrder } from '../models/order.model';
import { IOrderItem } from '../models/order-item.model';
import { IProduct } from '../models/product.model';

import { productsMatcher } from '../custom-validators/products-validator';

@Component({
  selector: 'new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  customers: ICustomer[];
  products: IProduct[];
  newOrderForm: FormGroup;
  tempTotalAmount: number;
  discountFlag: boolean;
  isSubmited: boolean = false;

  get orderItems(): FormArray {
    return <FormArray>this.newOrderForm.get('orderItems');
  }

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder, 
    private store: StoreService, 
    @Inject(TOASTR_TOKEN) private toastr: any) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.customers = data['customers'];
      this.products = data['products'];
    });
    this.newOrderForm = this.fb.group({
      customerId: ['', Validators.required],
      orderItems: this.fb.array([this.buildOrderItemFg()]),
      discount: false
    }, { validator: productsMatcher });

    this.orderItems.valueChanges.subscribe((items: IOrderItem[]) => {
      this.tempTotalAmount = this.calculateTotalAmount(items);
    });

    this.newOrderForm.get('discount').valueChanges.subscribe((discount: boolean) => this.discountFlag = discount);
  }

  addOrderItem(): void {
    this.orderItems.push(this.buildOrderItemFg());
  }

  buildOrderItemFg(): FormGroup {
    return this.fb.group({
      productId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  removeProduct(index) {
    this.orderItems.removeAt(index);
  }

  calculateTotalAmount(items: IOrderItem[]): number {
    let total: number = 0;
    for (let item of items) {
      if (item.productId && item.quantity) {
        total += this.products.find(p => p.id === +item.productId).unitPrice * item.quantity;
      }
    }
    return total;
  }

  submitForm() {
    if(confirm('Submit this order?')) {
      this.store.newOrder(this.newOrderForm).subscribe((data: IOrder) => {
        this.isSubmited = true;
        this.router.navigate(['orders']);
        this.toastr.success(`Order #${data.orderNumber} submited.`,'', {positionClass: "toast-top-full-width"});
      }, (err) => {
        this.router.navigate(['orders']);
        this.toastr.error('An error occured. Sorry for the inconvenience','', {positionClass: "toast-top-full-width"});
      });
    }
  }
}
