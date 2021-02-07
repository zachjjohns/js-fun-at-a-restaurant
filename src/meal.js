function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}

function createMenuItem(menuItemName, menuItemPrice, menuItemType) {
  return {
    name: menuItemName,
    price: menuItemPrice,
    type: menuItemType,
  }
}

function addIngredients(topping, ing) {
  if (!ing.includes(topping)) {
    ing.push(topping)
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(startingPrice) {
  return .90 * startingPrice
  // return initialPrice - (initialPrice * .10)
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
  return recipe
}

//addIngredients("cheese", ingredients);
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
