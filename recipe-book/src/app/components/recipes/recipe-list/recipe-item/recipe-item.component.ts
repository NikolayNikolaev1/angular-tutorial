import { Component, Input, OnInit } from '@angular/core';
import Recipe from '../../../../models/recipe';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelect() {
    this.recipeService.recipeOnClick(this.recipe);
  }
}
