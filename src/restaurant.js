function createRestaurant(name) {
  restaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurant
}

function addMenuItem(restaurant, foodItem) {
  foodType = foodItem.type;
  if (restaurant.menus.breakfast.includes(foodItem) ||
      restaurant.menus.lunch.includes(foodItem) ||
      restaurant.menus.dinner.includes(foodItem)) {
      }
  else if (foodType === "breakfast") {
  restaurant.menus.breakfast.push(foodItem)
  }
  else if (foodType === "lunch") {
  restaurant.menus.lunch.push(foodItem)
  }
  else if (foodType === "dinner") {
  restaurant.menus.dinner.push(foodItem)
  }
}

function removeMenuItem(restaurant, foodItem, foodType) {
  var foodName = restaurant.menus[foodType]
  if (foodName.length === 0) {
    return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`
  } else if (foodName.length > 0) {
    foodName.pop()
    return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`
  }
}
// ^^Only works because we have one item in each menu,
// would need to utilize a for loop or different approach to make more dynamic


// ______Approaches that led me down a rabbit hole below________

// function removeMenuItem(restaurant, foodItem, foodType) {
//     if (foodType === "breakfast" && restaurant.menus.breakfast[0].name === foodItem) {
//     restaurant.menus.breakfast.pop();
//     console.log(restaurant);
//     return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`
//   } else if (foodType === "lunch" && restaurant.menus.lunch[0].name === foodItem) {
//     restaurant.menus.lunch.pop();
//     return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`
//   } else if (foodType === "dinner" && restaurant.menus.dinner[0].name === foodItem) {
//     restaurant.menus.dinner.pop();
//     return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`
//   } else {
//     return `Sorry, we don't sell ${foodItem}, try adding a new recipe!`
//   }
//
// }

// if (foodType === "breakfast" && foodName.isEmpty()) {
//   restaurant.menus.breakfast.pop(foodItem)
// } else if (foodType === "lunch") {
//   restaurant.menus.lunch.pop(foodItem)
// } else if (foodType === "dinner") {
//   restaurant.menus.dinner.pop(foodItem)
// }
// return `No one is eating our ${foodItem} - it has been removed from the ${foodType} menu!`
// }

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
