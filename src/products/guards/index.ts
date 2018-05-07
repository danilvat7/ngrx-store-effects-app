import { PizzasGuard } from './pizzas.guard';
import { PizzaExistGuard } from './pizza-exist.guard';
import { ToppingsGuard } from './toppings.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './pizza-exist.guard';
export * from './toppings.guard';
