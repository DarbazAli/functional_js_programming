
/* 
    Introduction to Currying and Partial Application
*/

//Curried function
function curried(x) {
    return function(y) {
      return x + y;
    }
}


  //Alternative using ES6
const curried = x => y => x + y
  
curried(1)(2) // Returns 3






//Impartial function
function impartial(x, y, z) {
    return x + y + z;
  }
  var partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // Returns 13




function add(x) {
    // Only change code below this line
    return function(y) {
        return function(z) {
            return x + y + z;
        }
}

// Only change code above this line
}
add(10)(20)(30);