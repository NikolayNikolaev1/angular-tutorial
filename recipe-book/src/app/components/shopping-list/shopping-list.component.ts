import { Component } from '@angular/core';
import Ingredient from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
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

  createIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
