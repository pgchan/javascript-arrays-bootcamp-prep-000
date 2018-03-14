var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
<<<<<<< HEAD
  array.push(element);
  return array;
=======
  return array.push(element);
>>>>>>> 2f67d6d2568bf84c8a8d1797489cd1496cc20d63
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  array.shift();
  return array;
=======
  return array.shift();
>>>>>>> 2f67d6d2568bf84c8a8d1797489cd1496cc20d63
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
<<<<<<< HEAD
  array.pop();
  return array;
=======
  return array.pop();
>>>>>>> 2f67d6d2568bf84c8a8d1797489cd1496cc20d63
}

function removeElementFromEndOfArray(array) { 
  return array.slice(0, array.length-1);
}