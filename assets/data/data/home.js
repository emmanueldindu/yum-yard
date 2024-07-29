import a1 from '../../data/data/1.png'
import a2 from '../../data/data/2.png'
import spag from '../../data/data/spaghetti.png'
import salad from '../../data/data/salad.png'
import rice from '../../data/data/rice.png'
import pizza from '../../data/data/pizza.png'
import coffee from '../../data/data/coffee.png'
import cocktail from '../../data/data/cocktail.png'
import burger from '../../data/data/burger.png'
import chicken from '../../data/data/chicken.png'
import res from '../../data/data/res.jpg'
import harry from '../../data/data/harry.jpg'
import pasta from '../../data/data/pasta.jpg'
import a3 from '../../data/data/1.jpg'
import a4 from '../../data/data/2.jpg'
import a5 from '../../data/data/3.png'
import a6 from '../../data/data/5.png'
import a7 from '../../data/data/7.png'
import a8 from '../../data/data/11.jpg'
import a9 from '../../data/data/12.jpg'
import a10 from '../../data/data/13.jpg'
import a11 from '../../data/data/14.jpg'
import a12 from '../../data/data/15.jpg'
import a13 from '../../data/data/16.jpg'
import a14 from '../../data/data/10.png'



export const categories = [
  {
    text: 'Chicken',
    img: chicken,

  },



  {
    text: 'Burger',
    img: burger,
  },


  {
    text: 'Rice',
    img: rice,

  },



  {
    text: 'Pizza',
    img: pizza,
  },


  {
    text: 'Pasta',
    img: spag,
  },

  {
    text: 'Salad',
    img: salad,
  },

  {
    text: 'Coffee',
    img: coffee,
  },

  {
    text: 'Cocktail',
    img: cocktail,
  },

];

export const restaurants = [
  {
    name: 'Vapiano',
    id:1,
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '0.7 miles away',
    img: res,
    category: ['Chicken', 'Breakfast'],
      tags: ['Italian', 'Pizza', 'Pasta', 'Salads'],
    duration: '35',
    calories: 120
  },
  {
    name: '✨Urban Greens✨',
    id: 2,
    rating: '4.9 Excellent',
    ratings: '(500+)',
    distance: '1.7 miles away',
    img: harry,
    category: ['Lunch', 'Salad'],
        tags: ['Salads', 'Vegan', 'Healthy', 'British'],
    duration: '30',
    calories: 80
  },
  {
    name: 'El Minero',
    id: 3,
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Dinner', 'Breakfast'],
    img: a1,
        tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '10',
    calories: 77
  },
  {
    name: 'CHinese Tpas',
    id: 4,
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Dinner', 'Breakfast', 'Pizza'],
    img: a2,
        tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '25',
    calories: 60
  },

  {
    name: 'Brocolli fries',
    id: 5,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a3,
        tags: ['Lunch', 'Salads', 'Tpas', 'Pasta'],
    duration: '20',
    calories: 30
  },

  {
    name: 'Alfredo pasta',
    id: 6,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a4,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 30
  },
  {
    name: 'Alfredo pizza',
    id: 7,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a5,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 35
  },

  {
    name: 'Dragon Breath',
    id: 8,
    rating: '3.7 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a6 ,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 67
  },


  {
    name: 'Stir fry chicken',
    id: 9,
    rating: '4.6 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Dinner',  'Pizza'],
    img: a7,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '45',
    calories: 30
  },

  {
    name: 'BBQ Pulled Pork',
    id: 10,
    rating: '4.2 Excellent',
    ratings: '(500+)',
    distance: '1 mile away',
    category: ['Lunch', 'Breakfast', 'Beef'],
    img: a8,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 35
  },

  {
    name: 'Chickpea Salad',
    id: 11,
    rating: '4.0 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Chicken'],
    img: a9,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '30',
    calories: 22
  },


  {
    name: 'Mushroom Risotto',
    id: 12,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Dinner', 'Breakfast', 'Pasta'],
    img: a10,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '60',
    calories: 18
  },


  {
    name: 'Curry Noodles',
    id: 13,
    rating: '4.4 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza', 'Dinner'],
    img: a11,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '45',
    calories: 36
  },
  
  {
    name: 'Shrimp Pasta',
    id: 14,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '5 miles away',
    category: ['Lunch', 'Breakfast', 'Pasta'],
    img: a12,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '50',
    calories: 67
  },

  {
    name: ' Vegetable Platter',
    id: 15,
    rating: '4.3 Excellent',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a13,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '60',
    calories: 35
  },

  {
    name: 'Blackened Shrimp',
    id: 7,
    rating: '4.5 Excellent',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a14,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 35
  },
];
