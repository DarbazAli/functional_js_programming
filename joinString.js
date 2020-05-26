/* 
    Combine an Array into a String Using the join Method

    The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

*/


const sentensfy = str => {
    let words = str.split(/\W/);
    return words.join(" ");
}


console.log(sentensfy("May-the-force-be-with-you"));

