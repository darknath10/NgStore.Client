import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { NewOrderComponent } from '../../store/new-order/new-order.component';

@Injectable()
export class NewOrderGuard implements CanDeactivate<NewOrderComponent> {
    
    canDeactivate(component: NewOrderComponent): boolean {
        if(component.newOrderForm.dirty && !component.isSubmited) {
            return confirm('Cancel the current order?');
        }
        return true;
    }
}