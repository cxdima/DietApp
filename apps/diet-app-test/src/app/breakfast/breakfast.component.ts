import { Component, OnInit} from '@angular/core';
import { Recipe } from '../components/recipe/recipe';
import {productsList} from '../recipes/recipes.component'
@Component({
  selector: 'diet-app-test-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css'],
})
export class BreakfastComponent implements OnInit {

  breakfastProducts?: Array<Recipe>;

  ngOnInit() {
    this.breakfastProducts = productsList.filter((recipe) => {
      return recipe.breakfast;
    });
  }
}
