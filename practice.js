



    // 1 sing push and unshift, make this array contain the numbers from zero through seven
    const arr = [2, 3, 4];

    arr.push(5,6,7)
    arr.unshift(1)
    arr.unshift(0);

    arr; // => [0, 1, 2, 3, 4, 5, 6, 7]

// 2 What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:
    const arr = [5, 7, 9];
    arr.push(6); // [5, 7, 9, 6]


// 3 Write a JavaScript console.log to get the last element of an array: Make this dynamic!
const arr1 = [10,  9, 6, 5]

console.log(arr1[arr1.length-1])
   
// 4 Starting with an empty array called rainbowColors:
    const rainbowColors=[]
    rainbowColors.push('orange')
    rainbowColors.unshift('red')
    rainbowColors.push('yellow')
    rainbowColors
    rainbowColors.push("green", "blue", "indigo", "violet")
    rainbowColors.len
    rainbowColors[1]


// 5 Find out the difference between .slice and .splice
const twoColors = function(){
    console.log(rainbowColors.slice(2, 4));
}

twoColors();

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2, 2);
   nums
// 6 

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
arrOfArrs[0][0];
arrOfArrs[1][2]
  
   

  
