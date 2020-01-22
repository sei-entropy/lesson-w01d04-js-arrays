//practice 1.
const nums = [10,  9, 6, 5];
const strs = ['t','m','u','z',6,'i'];
const strs2 = [['t','m','u'],['z',6,'i']]
const strs3 = [['t'],'m','u','z',6,['i']]

const getMeTheLastElemInAnArray= function(Arr){
    return Arr[(Arr.length)-1];
}

getMeTheLastElemInAnArray(nums);
getMeTheLastElemInAnArray(strs);
getMeTheLastElemInAnArray(strs2);
getMeTheLastElemInAnArray(strs3);


//practice 4. Starting with an empty array called rainbowColors:
const rainbowColors =[];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");

rainbowColors.push("green","blue","violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("red"));
console.log(rainbowColors);
//practice 5 Find out the difference between .slice and .splice

const twoColors=rainbowColors.slice(1,3);
console.log(twoColors);


//practice 6 Work with arrays of arrays
const arrOfArrs = [["inner array first item", "inner array second item"],
 ["first", "second", "third"]];
//Access "inner array first item" and print it out"
//Print "third" by using a dynamic index
console.log(arrOfArrs[0][0]); 
console.log(arrOfArrs[1][2]);

