import { Component, OnInit } from '@angular/core';
import Recipe from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectRecipe.subscribe((data) => {
      this.selectedRecipe = data;
    });
  }
}
