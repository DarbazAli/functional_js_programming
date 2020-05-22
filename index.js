console.log("Functional JavaScript");


/* 
    Pass Arguments to Avoid External Dependence in a Function

    The functional Programming methodology is to create clean code that is clean from generating side effects

*/


let fixedValue = 4;

// create a function that increametns it's input by 1
const increamenter = ( value ) => {
    return value + 1;
}


console.log(increamenter(fixedValue));
console.log(increamenter(3));






let baseArr = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
];

console.log(baseArr);


const add = (arr, item ) => {
    let newArr = [...arr]
    newArr.push(item);
    return newArr;
}


const newArr = add(baseArr, "Item 5")

console.log(newArr);
console.log(baseArr);
