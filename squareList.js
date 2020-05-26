/* 
    Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

    We have defined a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].
*/

// return only positive integer elements, then the square of each element
const squareList = ( arr ) => {
    return  arr.filter( elem => Number.isInteger( elem ) && elem >= 0 )
    .map( elem => elem * elem)
    
}


console.log(squareList( [-3, 4.8, 5, 3, -3.2]))
console.log(squareList( [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))
