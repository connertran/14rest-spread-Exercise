// 1
// refractor this to use the rest operator & an arrow function

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...arg) => arg.filter(num => num % 2 === 0);

// 2 findMin 
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1
const findMin = (...nums) => nums.reduce((minimum, currentVal) => minimum < currentVal ? minimum : currentVal)

// 3 mergeObject
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

// 4 doubleAndReturnArgs
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
const doubleAndReturnArgs = (array, ...nums) => [...array, ...nums.map(num => num * 2)];

// 5 /** remove a random element in the items array
// and return a new array without that item. */
const removeRandom = itemsArr => {
  const randomNumber = Math.floor(Math.random() * itemsArr.length);
  const firstPart = itemsArr.slice(0, randomNumber)
  const secondPart = itemsArr.slice(randomNumber + 1)
  return [...firstPart, ...secondPart];
}

// 6 /** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

// 7
/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

// 8 /** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj
}

// 9 Combine two objects and return a new object.
const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 10 /** Return a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val });