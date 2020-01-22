[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Arrays

## Objectives

By the end of this, developers should be able to:

- Define an array
- Store, access, and update data values in arrays
- Iterate over items in an array


## Preparation

1. Fork and clone this repository
1. Create a new branch, `training`, for your work and change into it.


![images/arrays1](images/arrays1.png)

![images/arrays2](images/arrays2.png)

![images/arrays3](images/arrays3.png)

![images/arrays4](images/arrays4.png)

![images/arrays5](images/arrays5.png)

![images/arrays6](images/arrays6.png)

![images/arrays7](images/arrays7.png)

![images/arrays8](images/arrays8.png)

### Code Along: Arrays

In JavaScript to represent a list we can use an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Elements in an `Array` or items in our list are ordered. JavaScript arrays are
zero-indexed: the first element of an array is at index 0, and the last element
is at the index equal to the value of the array's length property minus 1. Using
an invalid index number returns `undefined`.

```js
// Create an empty array literal
const list = [];

// Create an array literal with values
const anotherList = ['Ahmed', 100, false, 2];

// Read value from an Array, use index
anotherList[0]; // 'Ahmed'
anotherList[2]; // false

// Update value in an Array, use index
anotherList[2] = true;
anotherList; // ['Ahmed', 100, true, 2]

// Add value to an Array, use index
anotherList[5] = 'Add Me';
anotherList; // ['Ahmed', 100, true, 2, undefined, 'Add Me']
```

## Array Methods

![images/arrays9](images/arrays9.png)

![images/arrays10](images/arrays10.png)

![images/arrays12](images/arrays12.png)

![images/arrays11](images/arrays11.png)

![images/arrays13](images/arrays13.png)

![images/arrays14](images/arrays14.png)

![images/arrays15](images/arrays15.png)

## Iterating through Arrays


#### Code Along: Iterate through an Array

```js
const developers = ['Hazim', 'Reem', 'Mansour']

// Individually print message for each item in array
console.log('Hello ' + developers[0])
console.log('Hello ' + developers[1])
console.log('Hello ' + developers[2])
```

## Array Practice

Create a  file named `practice.js` to save your solutions.

1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:

```js
const arr = [2, 3, 4];

arr.push(5);
arr.push(6);
arr.push(7);
arr.unshift(1);
arr.unshift(0);

arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
```

2. What is *returned* by `push`? Before throwing this into the console, form a hypothesis about what you think the return value will be:

```js
const arr = [5, 7, 9];
arr.push(6); // returns ???
```
4 
will return the lingth of the array 
3. Write a JavaScript console.log to get the last element of an array:
Make this dynamic!
```js
const arr1 = [10,  9, 6, 5]

console.log(arr1.length-1 )

```

4.  Starting with an empty array called `rainbowColors`:

    * Add "orange" to the end of the array
    * Add "red" to the start of the array
    * Add "yellow" to the end
    * Add "green", "blue", "indigo", and "violet" to the end of the array
      * Try and do this using _one_ method
    * Print the length of the array
    * Print the second item
    * Print the last item (make this flexible/dynamic!)
    * Print the index of the string "blue"
const rainbowColors = []
rainbowColors .push("orange");
rainbowColors .unshift ("red");
rainbowColors .push("yellow" );
rainbowColors .push( "green", "blue", "indigo", "violet" );
rainbowColors.length
rainbowColors[1];
 rainbowColors [rainbowColors .length-1]
 rainbowColors .length-1
 rainbowColors.indexOf("blue");

 5. Find out the difference between `.slice` and `.splice`
    * Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
    * Starting with this array `const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates *destructively* using _slice_ or _splice_ (whichever one is appropriate)
 const twoColors = rainbowColors.slice(1, 3);
 console.log(twoColors);

 const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
 nums.splice(2,3);


6. Work with arrays of arrays
    * Starting with this array `const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];`
    * Access "inner array first item" and print it out"
    * Print "third" by using a dynamic index
  arrOfArrs [0][0];
for (let i=0 ; i< arrOfArrs.length ; i++)
{
 console.log(arrOfArrs[1][2]); 
} 
  


## Array Methods Resources

- https://www.w3schools.com/js/js_array_methods.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
## Array Resources

- https://javascript.info/array
- https://javascript.info/array-methods
- https://medium.freecodecamp.org/javascript-arrays-and-objects-are-just-like-books-and-newspapers-6e1cbd8a1746
- https://www.codeanalogies.com/objects-arrays-practice/
