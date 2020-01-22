// 4 
 //Starting with an empty array called rainbowColors:
 let rainbowColors =[];


//Add "orange" to the end of the array
rainbowColors.push("orange");

//Add "red" to the start of the array
rainbowColors.unshift("red");

//Add "yellow" to the end
rainbowColors.push("yellow");

//Add "green", "blue", "indigo", and "violet" to the end of the array
//Try and do this using one method
rainbowColors.push("green" ,"blue" , "indigo", "violet");

//Print the length of the array
rainbowColors.length ;

//Print the second item
rainbowColors[1];

//Print the last item (make this flexible/dynamic!)
rainbowColors[rainbowColors.length-1] ;

//Print the index of the string "blue"
rainbowColors.indexOf("blue");


// Find out the difference between .slice and .splice

//The splice() 
// method adds/removes items to/from an array, and returns the removed item(s).
//Note: This method changes the original array.

//The slice() 
// returns the selected elements in an array, as a new array object.
// and selects the elements starting at the given start argument,
// and ends at, but does not include, the given end argument.
//Note: The original array will not be changed.



// 5
//Create an array called twoColors using one method - 
//don't change the rainbowColors array! 
//Essentially pull two colors out of the array (say, between the index of 1 and 3)

let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let twoColors = rainbowColors.slice(1, 4);

//Starting with this array const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, 
//remove the duplicates destructively using slice or splice (whichever one is appropriate)

// splice 



// 6 

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out"
let firstItem = arrOfArrs[0].slice(0, 1);
console.log(firstItem);

//Print "third" by using a dynamic index

for (let i=0 ; i< arrOfArrs.length ; i++)
{
 let thirdItem = arrOfArrs[i+1].slice(2, 3);
 console.log(thirdItem);
}