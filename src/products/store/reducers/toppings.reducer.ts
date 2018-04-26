import * as fromToppings from '../actions/toppings.action';
import { Topping } from '../../models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: true,
  loading: true
};
