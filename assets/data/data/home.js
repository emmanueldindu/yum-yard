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
    rating: '4.5 ',
    ratings: '(500+)',
    distance: '0.7 miles away',
    img: res,
    category: ['Chicken', 'Breakfast'],
      tags: ['Italian', 'Pizza', 'Pasta', 'Salads'],
    duration: '35',
    price: 14,
    ingrideints: 'Fresh garlic cloves, minced or chopped, essential for flavoring many recipes.', 
    calories: 120,
    description: 'A delightful blend of savory and sweet flavors, combining a crispy outer layer with a tender, juicy center, served with a tangy dipping sauce.'
  },
  {
    name: '✨Urban Greens✨',
    id: 2,
    rating: '4.9 ',
    ratings: '(500+)',
    distance: '1.7 miles away',
    img: harry,
    category: ['Lunch', 'Salad'],
        tags: ['Salads', 'Vegan', 'Healthy', 'British'],
    duration: '30',
    price: 16.5,
    ingrideints: 'Boneless, skinless chicken breast, often used in stir-fries, salads, or grilled dishes.',
    calories: 80,

    description: 'A creamy, rich dish featuring a harmonious mix of spices and herbs, enveloping a tender protein, accompanied by a side of aromatic rice.',

  },
  {
    name: 'El Minero',
    id: 3,
    rating: '4.5 ',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Dinner', 'Breakfast'],
    img: a1,
        tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '10',
    calories: 77,
    price: 13,
    ingrideints: 'Ripe Roma tomatoes, known for their firm texture and low moisture, ideal for sauces and salads.',
    description: 'A refreshing, light creation made with fresh, seasonal vegetables, drizzled with a zesty vinaigrette, and topped with crunchy nuts for texture.',
  },
  {
    name: 'CHinese Tpas',
    id: 4,
    rating: '4.5 ',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Dinner', 'Breakfast', 'Pizza'],
    img: a2,
        tags: ['Spanish', 'Salads', 'Tpas', 'Pasta'],
    duration: '25',
    price: 14.3,
    ingrideints: 'Sweet red bell peppers, diced or sliced, great for adding color and sweetness to dishes.',
    calories: 60,
    description: 'A hearty, comforting bowl of slow-cooked goodness, filled with tender chunks of meat, root vegetables, and a robust, flavorful broth.',

  },

  {
    name: 'Brocolli fries',
    id: 5,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a3,
        tags: ['Lunch', 'Salads', 'Tpas', 'Pasta'],
    duration: '20',
    calories: 30,
    price: 20,
    ingrideints: 'Fresh spinach leaves, which can be used in salads, sautéed as a side, or added to soups and smoothies.',
    description: 'A decadent, melt-in-your-mouth dessert with layers of velvety cream, luscious fruit compote, and a buttery, crumbly base.',

  },

  {
    name: 'Alfredo pasta',
    id: 6,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a4,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 30,
    price: 9.8,
    ingrideints: 'A nutrient-rich grain, cooked and used as a base for salads or served as a side dish.',
    description: 'A vibrant, colorful plate of roasted vegetables, tossed in a fragrant herb oil, and finished with a sprinkle of sea salt and a squeeze of lemon.',

  },
  {
    name: 'Alfredo pizza',
    id: 7,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a5,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 35,
    price: 25,
    ingrideints: 'Canned or cooked black beans, used in salads, soups, or as a protein source in vegetarian dishes.',
    description: 'A savory, golden-brown pastry filled with a rich, creamy mixture of cheese and herbs, perfect for a light snack or appetizer.',

  },

  {
    name: 'Dragon Breath',
    id: 8,
    rating: '3.7 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a6 ,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    price: 21.4,
    ingrideints: ' Extra virgin olive oil, used for cooking, sautéing, or as a dressing for salads.',
    calories: 67,
    description: 'A spicy, aromatic dish featuring tender pieces of meat simmered in a complex sauce made with a medley of exotic spices and fresh herbs.',

  },


  {
    name: 'Stir fry chicken',
    id: 9,
    rating: '4.6 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Dinner',  'Pizza'],
    img: a7,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '45',
    calories: 30,
    price: 23,
    ingrideints: 'Sliced or diced red onion, known for its mild flavor and vibrant color, used in salads, salsas, or as a topping.',
    description: 'A refreshing, chilled soup made with ripe, juicy tomatoes, crisp cucumbers, and a hint of garlic, garnished with fresh herbs and a drizzle of olive oil.',

  },

  {
    name: 'BBQ Pulled Pork',
    id: 10,
    rating: '4.2 ',
    ratings: '(500+)',
    distance: '1 mile away',
    category: ['Lunch', 'Breakfast', 'Beef'],
    img: a8,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    calories: 35,
    price: 12,
    ingrideints: 'Ripe avocado, used in salads, as a topping, or made into guacamole.',
    description: 'A luxurious, indulgent treat made with layers of silky chocolate mousse, crunchy cookie crumbles, and a hint of espresso.',

  },

  {
    name: 'Chickpea Salad',
    id: 11,
    rating: '4.0 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Chicken'],
    img: a9,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '30',
    calories: 22,
    price: 15,
    ingrideints: ' Sharp or mild cheddar cheese, shredded or sliced, used in sandwiches, burgers, or as a topping.',
    description: 'A flavorful, protein-packed salad with a mix of fresh greens, roasted vegetables, and a tangy citrus dressing, topped with crunchy seeds.',
  },


  {
    name: 'Mushroom Risotto',
    id: 12,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Dinner', 'Breakfast', 'Pasta'],
    img: a10,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '60',
    calories: 48,
    price: 18,
    ingrideints: 'Fresh cilantro leaves, chopped, used to add a fresh, herbaceous flavor to dishes like salsas or curries.',
    description: 'A hearty, filling sandwich piled high with layers of thinly sliced meat, fresh vegetables, and a tangy sauce, all nestled between two slices of crusty bread.',

  },


  {
    name: 'Curry Noodles',
    id: 13,
    rating: '4.4 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza', 'Dinner'],
    img: a11,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '45',
    calories: 36,
    price: 17,
    ingrideints: 'Freshly squeezed lemon juice, used for flavoring, marinating, or adding acidity to dishes.',
    description: 'A rich, velvety soup made with earthy mushrooms, a splash of cream, and a hint of sherry, served with a slice of warm, crusty bread.',

  },
  
  {
    name: 'Shrimp Pasta',
    id: 14,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '5 miles away',
    category: ['Lunch', 'Breakfast', 'Pasta'],
    img: a12,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '50',
    calories: 67,
    price: 14,
    ingrideints: 'Ground cumin, a spice with a warm, earthy flavor, used in many spice blends and dishes like chili or curry.',
    description: 'A light, fluffy pastry filled with a sweet, tangy fruit filling, dusted with powdered sugar and served warm from the oven.',

  },

  {
    name: ' Vegetable Platter',
    id: 15,
    rating: '4.3 ',
    ratings: '(500+)',
    distance: '3 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a13,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '60',
    price: 33,
    ingrideints: 'Plain Greek yogurt, which can be used as a base for sauces, dressings, or as a substitute for sour cream.',
    calories: 35,
    description: 'A spicy, flavorful stir-fry made with tender pieces of meat, crisp vegetables, and a savory sauce, served over a bed of fluffy rice.'
  },

  {
    name: 'Blackened Shrimp',
    id: 16,
    rating: '4.5 ',
    ratings: '(500+)',
    distance: '4 miles away',
    category: ['Lunch', 'Breakfast', 'Pizza'],
    img: a14,
        tags: ['Lunch', 'Salads', 'Tpas', 'Breakfast', 'Pasta'],
    duration: '20',
    price: 16,
    ingrideints: 'Your choice of pasta (like penne, spaghetti, or fusilli), cooked as a base for sauces or in pasta salads.',
    calories: 35,
    description: 'Succulent shrimp cooked in spicy tomato sauce, served in a crispy taco shell.',
  },
];
