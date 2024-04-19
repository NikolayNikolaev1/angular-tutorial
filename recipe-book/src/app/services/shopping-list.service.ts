import { EventEmitter, Injectable } from '@angular/core';
import Ingredient from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    {
      name: 'test',
      amount: 1,
    },
    {
      name: 'test 2',
      amount: 2,
    },
  ];

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
