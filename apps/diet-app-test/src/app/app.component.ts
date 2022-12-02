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
    image: '/assets/Example_7.webp',
    name: 'Spaghetti Carbonara',
    time: 10,
    difficulty: 'easy',

  },
  {
    id: 2,
    rating: 3,
    stars: 5,
    image: '/assets/Example_6.webp',
    name: 'Steak',
    time: 30,
    difficulty: 'medium'
  },
  {
    id: 3,
    rating: 5,
    stars: 5,
    image: '/assets/Example_8.webp',
    name: 'Muffins',
    time: 20,
    difficulty: 'hard'
  },
  {
      id: 3,
      rating: 5,
      stars: 5,
      image: '/assets/Example_8.webp',
      name: 'Muffins',
      time: 20,
      difficulty: 'hard'
    },
    {
        id: 3,
        rating: 5,
        stars: 5,
        image: '/assets/Example_8.webp',
        name: 'Muffins',
        time: 20,
        difficulty: 'hard'
      },
      {
          id: 3,
          rating: 5,
          stars: 5,
          image: '/assets/Example_8.webp',
          name: 'Muffins',
          time: 20,
          difficulty: 'hard'
        },
];
