import { Component, EventEmitter, Output } from '@angular/core';
import Recipe from '../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() onRecipeSelect = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    {
      title: 'Test',
      description: 'tester test',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      ingredients: [
        { name: 'tester', amount: 2 },
        { name: 'test', amount: 1 },
      ],
    },
    {
      title: 'test 2',
      description: 'tester test desc0',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      ingredients: [{ name: 'testest', amount: 1 }],
    },
  ];

  onSelect(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe);
  }
}
