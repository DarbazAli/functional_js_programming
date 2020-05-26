/* 
    Use the some Method to Check that Any Elements in an Array Meet a Criteria

    The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/


// check of one value of array is positive

const checkPositive = arr => arr.some( elem => elem > 0 )