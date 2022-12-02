import { Component } from '@angular/core';
import { Recipe } from './recipe/recipe';

@Component({
  selector: 'diet-app-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'diet-app-test';
  products = productsList;
}

export const productsList: Array<Recipe>= [
  {
    id: 1,
    rating: 1,
    stars: 5,
    image: '/assets/carbonara.webp',
    name: 'Spaghetti Carbonara',
    time: 30,
    difficulty: 'Easy',
    sale: true,

  },
  {
    id: 2,
    rating: 4,
    stars: 5,
    image: '/assets/steak.webp',
    name: 'Gochujang Skirt Steak',
    time: 40,
    difficulty: 'Hard',
    sale: false,
  },
  {
    id: 3,
    rating: 5,
    stars: 5,
    image: '/assets/muffins.webp',
    name: 'Muffins',
    time: 20,
    difficulty: 'Medium',
    sale: true,
  },
  {
    id: 4,
    rating: 5,
    stars: 5,
    image: '/assets/smoothie.jpeg',
    name: 'Berry Smoothie',
    time: 10,
    difficulty: 'easy',
    sale: true,
  },
  {
    id: 5,
    rating: 5,
    stars: 5,
    image: '/assets/omelet.webp',
    name: 'Classic Folded Omelet',
    time: 15,
    difficulty: 'easy',
    sale: false,
  },
  {
    id: 6,
    rating: 5,
    stars: 5,
    image: '/assets/pancakes.jpeg',
    name: 'Easy Pancakes',
    time: 20,
    difficulty: 'Medium',
    sale: false,
  },
  {
    id: 7,
    rating: 5,
    stars: 5,
    image: '/assets/pizza.jpeg',
    name: 'Pizza Salami',
    time: 25,
    difficulty: 'Medium',
    sale: false,
  },
  {
    id: 8,
    rating: 5,
    stars: 5,
    image: '/assets/chicken.webp',
    name: 'Baked Chicken with Potato Slices',
    time: 40,
    difficulty: 'hard',
    sale: true,
  }
];
