// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
const test1 = (getLength(items,item=>items.length));
console.log(test1);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

const test2 = (last(items,item=>items[items.length-1]));
console.log(test2);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x+y;
  return cb(result);
}
function printSum (sum){
  console.log(sum);
}
const test3 = (sumNums(235,15654,printSum));
console.log(test3);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x*y;
  return cb(result);
}

function printMult (mult){
  console.log(mult);
}
const test4 = (multiplyNums(10,15,printMult));
console.log(test4);






function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // function checkedPet(item,list) {
    let something = false;
    for (let i=0; i < list.length; i++) {
      if (list[i].includes(item)) {
        something = true;
      } 
    }
    cb(something);
  // }
  // cb(checkedPet(item,list));
}

function trueFalse(tf) {
  console.log(tf);
}

const pets = ['cat', 'hamster', 'dog', 'mouse', 'hedgehod'];
const test5 = contains('mouse', pets, trueFalse);
console.log(test5);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
