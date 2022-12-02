import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'diet-app-test-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {

  @Input()
  recipe: Recipe = {} as Recipe;

}
