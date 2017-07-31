import { Component, Input, Output, EventEmitter} from '@angular/core';

import { ICustomer } from '../models/customer.model';

@Component({
  selector: 'customers-dropdown',
  templateUrl: './customers-dropdown.component.html',
  styleUrls: ['./customers-dropdown.component.css']
})
export class CustomersDropdownComponent {
  @Input() customers: ICustomer[];
  @Output() customerSelected = new EventEmitter<ICustomer>();

  selectCustomer(customer: ICustomer) {
    this.customerSelected.emit(customer);
  }

}
