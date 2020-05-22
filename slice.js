/* 
    Remove Elements from an Array Using slice Instead of splice

    we can remove elements from an array using slice instead of splice

    => splice mutates the origninal array and changes it's state
    => slice creats a new array and returns that array

*/

// get the first 3 items from an aray, withouth modifing the original arr
function nonMutatingSplice(cities) {
    // Only change code below this line
    let newArray = cities.slice(0, 3);
    return newArray;
    // Only change code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));

  console.log(inputCities);
  

  