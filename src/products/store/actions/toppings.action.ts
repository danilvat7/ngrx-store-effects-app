import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';
import { LoadPizzas, LoadPizzasFail, LoadPizzasSuccess } from './pizzas.action';

export const LOAD_TOPPINGS = '[Porducts] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Porducts] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Porducts] Load Toppings Success';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

// action type
export type ToppingsAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
