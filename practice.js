//1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:

const arr = [2, 3, 4];

arr.push(6);
arr.push(7);
arr.unshift(1);
arr.unshift(0);
//2. What is *returned* by `push`? Before throwing this into the console, form a hypothesis about what you think the return value will be:

const arr = [5, 7, 9];
arr.push(6); // returns ??? 4
//return the length of the arrary
//3. Write a JavaScript console.log to get the last element of an array: Make this dynamic!
const arr1 = [10,  9, 6, 5]

    console.log(arr1[arr1.length-1]); 
    // 4.  Starting with an empty array called `rainbowColors`:
const rainbowColors = [];
 rainbowColors.push("orange");
 rainbowColors.unshift("red");
 rainbowColors.push("yellow");
 rainbowColors.push("green", "blue", "indigo","violet");
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("blue"));
//5. Find out the difference between `.slice` and `.splice`
const twoColors = rainbowColors.slice(1,3);
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,5);
// 6.Work with arrays of arrays
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][arrOfArrs[arrOfArrs.length-1]]);




