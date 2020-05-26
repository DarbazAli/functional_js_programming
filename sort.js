/* 
    Sort an Array Alphabetically using the sort Method

*/


function compareNumbers(a, b) {
    return a - b;
}




// sort from min to max
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}


// sort from max to min
function descendingOrder(arr) {
    return arr.sort( function( a, b ) {
        return b - a;
    })
}

// alphabetical order
function sortAlphabetically(arr) {
    return arr.sort( function( a, b ) {
        return a === b? 0: a < b? -1: 1;
    })
}


let arr = [1, 3, 8, 5, 0, 9];

console.log(ascendingOrder(arr))
console.log(descendingOrder(arr))

console.log(sortAlphabetically(['z', 'c', 'd', 'f', 'e']))


console.log(compareNumbers(8, 5))

console.log(arr);


/* 
    Avoid data mutation with sort methode
*/

let arr2 = [1, 3, 8, 5, 0, 9];

const nonMutatingSort = arr => {

    // clone original arr
    const newArray = [...arr];
    
    return newArray.sort( function( a, b ) {
        return a - b;
    })
}


console.log(nonMutatingSort(arr2));

console.log(arr2);




