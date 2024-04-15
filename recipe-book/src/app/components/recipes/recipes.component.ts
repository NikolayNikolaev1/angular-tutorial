import { Component } from '@angular/core';
import Recipe from '../../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  selectedRecipe?: Recipe;

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
