// Exersice 4

let rainbowColors = [];

rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo", "violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf('blue'));

// Exersice
let twoColors = rainbowColors.slice(1, 3);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3,3);

// Exersice
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]) // inner array first item
console.log(arrOfArrs[arrOfArrs.length - 1] [arrOfArrs.slice(arrOfArrs.length - 1)[0].length - 1])
