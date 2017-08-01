import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export function productsMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    /*let orderItems = group.controls['orderItems'].value.map(e => +e['productId']) as Array<number>;
    if (orderItems.length > 1) {
        let filtered = orderItems.filter(e => e === orderItems[orderItems.length - 1]);
        if (filtered.length > 1) return { 'valid': false };
        else return null;
    }
    return null;*/

    let values: number[] = c.get('orderItems').value.map(e => +e['productId']);
    if (values.length > 1) {
        let filteredValues = values.filter(v => v === values[values.length - 1]);
        if (filteredValues.length > 1) return { 'valid': false }
        else return null;
    }
    return null;
}