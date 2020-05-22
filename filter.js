/* 
    Use the filter Method to Extract Data from an Array

    filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.
*/

// how filter works under the hood
Array.prototype.myFilter = function(callback){
    // Only change code below this line
    var newArray = [];
     for (let i = 0;i<this.length;i++) {
      if (callback(this[i]))
        newArray.push(this[i]);
    }
    // Only change code above this line
    return newArray;
  
  };


const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

let above10 = users.myFilter( user => user.age > 10 );
console.log(above10);



let under30s = users
    .filter( user => user.age < 30 )
    .map( function( user ) {
        return {
            name: user.name
        }
    })

console.log(under30s);
