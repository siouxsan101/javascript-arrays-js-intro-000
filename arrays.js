var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;

}

function accessElementInArray(array,index) {
  var element = (array[index]);
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(element);
}
function removeElementFromBeginningOfArray(array,element){
  array.slice(0);

}

function destructivelyRemoveElementFromEndOfArray(array,element){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array,element) {
  array.slice(0,array.length-1);
  return array;
}
