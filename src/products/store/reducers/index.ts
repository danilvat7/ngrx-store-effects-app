import {
  ActionReducerMap,
  createFeatureSelector,
  } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';
import * as fromPToppings from './toppings.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromPToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromPToppings.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);


