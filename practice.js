// -----------------------  3
const getMeTheLastElemInAnArray = function(arr) {
    return arr[arr.length - 1];
}; 

const arr = ['a', 2, 'c'];
const strs2 = [['t','m','u'],['z',6,'i']]
const strs3 = [['t'],'m','u','z',6,['i']] 

console.log(getMeTheLastElemInAnArray(arr));
console.log(getMeTheLastElemInAnArray(strs2));
console.log(getMeTheLastElemInAnArray(strs3));

// -----------------------  4
let rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf('blue'));

// -----------------------  5
let twoColors = rainbowColors.slice(1, 4);
console.log('rainbowColors sliced : ' + twoColors); 
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2, 3, 2);
nums.splice(3, 2, 3);
console.log(nums);
// -----------------------  6
const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[arrOfArrs.length - 1][arrOfArrs[arrOfArrs.length - 1].length - 1]);