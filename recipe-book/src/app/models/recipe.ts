import Ingredient from './ingredient';

export default interface Recipe {
  title: string;
  description?: string;
  imagePath?: string;
  ingredients: Ingredient[];
}
