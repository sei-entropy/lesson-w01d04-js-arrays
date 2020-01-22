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


//practice 2.
const rainbowColors =[];
rainbowColors.push("orange");
rainbowColors.unshift("red");
rainbowColors.push("yellow");

rainbowColors.push("green","blue","violet");

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length-1]);
console.log(rainbowColors.indexOf("red"));
