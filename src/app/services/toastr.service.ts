import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken('toastr');

export function toastrFactory() {
    return window['toastr'];
}

export const TOASTR_PROVIDER = {provide: TOASTR_TOKEN, useFactory: toastrFactory};