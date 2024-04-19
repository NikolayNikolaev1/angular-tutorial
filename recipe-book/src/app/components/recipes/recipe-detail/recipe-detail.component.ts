import { Component, Input } from '@angular/core';
import Recipe from '../../../models/recipe';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe?: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  getIngredients() {
    return this.recipe.ingredients.map((i) => `${i.name} - ${i.amount}`).join(', ');
  }

  onToShoppingListClick() {
    this.recipe.ingredients.map((i) => this.shoppingListService.addIngredient(i));
  }
}
