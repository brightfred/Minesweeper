/*create a function that takes a grid of $ and - where each ($) represents a mine and each (-) represents a safe square. Return an array
where each ($) is replaced by a digit indicating the number of mines immediately mine adjacent to the spot.

exemple :
mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
]) 

output : [
    ["0", "0", "0", "0", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "1", "$", "1", "0"],
    ["0", "1", "1", "1", "0"],
    ["0", "0", "0", "0", "0"]
]

*/

// create a function that accepts a 2d array arr

const mineGrid = (arr) => {
    // Create a helper function that access the element position (y,x) in the array.if the y index is valid or exists,i want to return an array [y][x] ; else return null.This will prevent accessing undefined elements and to avoid errors.
    const checkAccess = (y, x) => arr[y]? arr[y][x] : null; //  if the y index is valid or exists,i want to return an array [y][x] ; else return null.
    // Create a helper function that calculates the number of adjacent mines to a given position (y,x) in the array.
    const getMine = (y, x) => {
        // an array is constructed with the elements representing the content of adjacent position.we are going to use checkAccess for each of the 8 adjacent positions.
        return [
            checkAccess(y+1, x), //  check the cell below the current cell
            checkAccess(y+1, x+1), //  check the cell below and to the right of the current cell
            checkAccess(y, x+1),  //  check the cell to the right of the current cell
            checkAccess(y-1, x+1),  //  check the cell above and to the right of the current cell
            checkAccess(y-1, x),  //  check the cell above the current cell
            checkAccess(y-1, x-1), //  check the cell above and to the left of the current cell
            checkAccess(y, x-1), //  check the cell to the left of the current cell
            checkAccess(y+1, x-1)  //  check the cell below and to the left of the current cell
            //cpnstruct an array of values that represent the content of the cells adjacents, after the constructing of the array ,we will use filter to keep only those elements that are mines ('$') and return the length of the filtered array.
        ].filter(adjCell => adjCell === '$').length; // filter the array to keep only the mines and return the length of the filtered array.
    }
    // create a new array with the same number of rows as the original array.
    return arr.map((row, y) => row.map((c,x)=> c === "-" ? getMine(y,x) : c)); // map through the array and check if the element is a mine or not.
}


// Test the function

console.log(mineGrid([
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "$", "-", "-"],
    ["-", "-", "-", "$", "-"],
    ["-", "-", "-", "-", "-"]
])); // output : [
    // ["0", "0", "0", "0", "0"],
    // ["0", "1", "1", "1", "0"],
    // ["0", "1", "$", "1", "0"],
    // ["0", "1", "1", "1", "0"],
    // ["0", "0", "0", "0", "0"]
    // ]



            

