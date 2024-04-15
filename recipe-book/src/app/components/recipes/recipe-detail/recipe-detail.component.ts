import { Component, Input } from '@angular/core';
import Recipe from '../../../models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  getIngredients() {
    return this.recipe.ingredients.map((i) => `${i.name} - ${i.amount}`).join(', ');
  }
}
