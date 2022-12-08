import { Component } from '@angular/core';
import { Recipe } from '../components/recipe/recipe';

@Component({
  selector: 'diet-app-test-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  title = 'diet-app-test';
  products = productsList;}

export const productsList: Array<Recipe>= [
  {
    id: 1,
    rating: 11724,
    stars: 5,
    image: '/assets/carbonara.webp',
    name: 'Spaghetti Carbonara',
    time: 30,
    difficulty: 'Easy',
    onfire: true,

  },
  {
    id: 2,
    rating: 41983,
    stars: 5,
    image: '/assets/steak.webp',
    name: 'Gochujang Skirt Steak',
    time: 40,
    difficulty: 'Hard',
    onfire: false,
  },
  {
    id: 3,
    rating: 23423,
    stars: 5,
    image: '/assets/muffins.webp',
    name: 'Muffins',
    time: 20,
    difficulty: 'Medium',
    onfire: true,
  },
  {
    id: 4,
    rating: 51293,
    stars: 5,
    image: '/assets/smoothie.jpeg',
    name: 'Berry Smoothie',
    time: 10,
    difficulty: 'easy',
    onfire: true,
  },
  {
    id: 5,
    rating: 23475,
    stars: 5,
    image: '/assets/omelet.webp',
    name: 'Classic Folded Omelet',
    time: 15,
    difficulty: 'easy',
    onfire: false,
  },
  {
    id: 6,
    rating: 50329,
    stars: 5,
    image: '/assets/pancakes.jpeg',
    name: 'Easy Pancakes',
    time: 20,
    difficulty: 'Medium',
    onfire: false,
  },
  {
    id: 7,
    rating: 12935,
    stars: 5,
    image: '/assets/pizza.jpeg',
    name: 'Pizza Salami',
    time: 25,
    difficulty: 'Medium',
    onfire: false,
  },
  {
    id: 8,
    rating: 23485,
    stars: 5,
    image: '/assets/chicken.webp',
    name: 'Baked Chicken',
    time: 40,
    difficulty: 'hard',
    onfire: true,
  }
];
