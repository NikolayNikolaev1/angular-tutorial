import { Component } from '@angular/core';
import Recipe from '../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      title: 'Test',
      description: 'tester test',
      imagePath:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      ingredients: [],
    },
    {
      title: 'test 2',
      ingredients: [],
    },
  ];
}
