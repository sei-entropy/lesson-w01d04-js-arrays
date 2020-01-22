//Q1
const arr = [2, 3, 4];

// Your code 

arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
arr.unshift(1);
arr.unshift(0);
arr.push(5);
arr.push(6);
arr.push(7);
console.log(arr);
//Q2

const arr2= [5, 7, 9];
arr2.push(6);
console.log(arr2);
//add (6) to the End of the array

//Q3
const arr1 = [10, 9, 6, 5];
console.log(arr1[arr1.length - 1]);

//Q4

const rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.push('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo", "violet");
console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length -1]);
console.log(rainbowColors.indexOf('blue'));
//Q5
//1
const twoColors = ["green", "blue"];
twoColors.splice(0,2);

console.log(twoColors);
//2
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(2, 2, null);
nums.splice(5,1,null);
console.log("aaray is "+nums);
//

//Q6
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);