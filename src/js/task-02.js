const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const arrayOfIngredients = ingredients.map(ingredient => {
  const itemIngredient = document.createElement('li');
  itemIngredient.textContent = ingredient;
  return itemIngredient;
});

ingredientsList.append(...arrayOfIngredients);