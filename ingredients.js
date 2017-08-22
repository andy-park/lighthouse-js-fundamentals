var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
function printIng(arr) {
  var i = 0

  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

printIng(ingredients)
// Write a for loop that prints out the contents of ingredients:
var printIng = function(ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i])
  }
  return ingredients[i]
}

printIng(ingredients)
// // Write any loop (while or for) that prints out the contents of ingredients backwards:
function reverse(arr) {
  // console.log(arr.length)
  var i = arr.length
  while (i >= 0) {
    console.log(arr[i]);
    i--
  }
}

reverse(ingredients)

