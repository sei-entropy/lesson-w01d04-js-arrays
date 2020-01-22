


//Write a JavaScript console.log to get the last element of an array: Make this dynamic!

const arr1 = [10,  9, 6, 5];


const strs2 = [['t','m','u'],['z',6,'i']]
const strs3 = [['t'],'m','u','z',6,['i']]

const getMeTheLastElement = function(arr){

let length= arr.length
return arr[length-1];



};

console.log(getMeTheLastElement(arr1));
console.log(getMeTheLastElement(strs2));
console.log(getMeTheLastElement(strs3));





//Starting with an empty array called rainbowColors
const rainbowColors = [];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");

rainbowColors.push("green","blue","indigo","violet");


console.log(rainbowColors);

console.log(rainbowColors.length);

console.log(rainbowColors[1]);//must ask 

let length=rainbowColors.length;

console.log(rainbowColors[length-1]);

console.log(rainbowColors.indexOf("blue"));




//Find out the difference between .slice and .splice
const twoColors = rainbowColors.slice(1,3);

console.log(twoColors);



//Work with arrays of arrays




const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0])
let length=arrOfArrs.length
//console.log(length)
let array1 = [];
array1=arrOfArrs[length-1];
let length2=array1.length

console.log(array1[length2-1]);

