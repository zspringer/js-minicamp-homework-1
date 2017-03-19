//Do not change any of the function names

function multiplyByTen(num) {
  var product = num * 10;//return num after multiplying it by ten
  return product;//code here
}

function subtractFive(num) {
  var difference = num - 5;//return num after subtracting five
  return difference;//code here
}

function areSameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  }//return true if the two strings have the same length
  //otherwise return false
  return false;//code here
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }//return true if x and y are the same
  //otherwise return false
  return false;//code here
}

function lessThanNinety(num) {
  if (num < 90) {
  return true;
  }//return true if num is less than ninety
  //otherwise return false
  return false;//code here
}

function greaterThanFifty(num) {
  if (num > 50) {
  return true;
  }//return true if num is greater than fifty
  //otherwise return false
  return false;//code here
}

function add(x, y) {
  var sum = (x + y);//add x and y together and return the value
  return sum;//code here
}

function subtract(x, y) {
  var diff = (x - y); //subtract y from x and return the value
  return diff;//code here
}

function divide(x, y) {
  var divide = (x / y);//divide x by y and return the value
  return divide;//code here
}

function multiply(x, y) {
  var product = (x * y);//multiply x by y and return the value
  return product;//code here
}

function getRemainder(x, y) {
  var remainder = (x % y);//return the remainder from dividing x by y
  return remainder;//code here
}

function isEven(num) {
  if (num % 2 == 0) {
  //return true if num is even
  return true;//otherwise return false
  }
  return false;//code here
}

function isOdd(num) {
  if (num % 2 == 1) {//return true if num is false
  return true;//otherwise return false
  }
  return false;//code here
}

function square(num) {
  var squared = Math.pow(num, 2);//square num and return the new value
  return squared;//code here
}

function cube(num) {
  var cubed = Math.pow(num, 3);//cube num and return the new value
  return cubed;//code here
}

function raiseToPower(num, exponent) {
  var power = Math.pow(num, exponent);//raise num to whatever power is passed in as exponent
  return power;//code here
}

function roundNumber(num) {
  var x = Math.round(num);//round num and return it
  return x;//code here
}

function roundUp(num) {
  var x = Math.ceil(num);//round num up and return it
  return x;//code here
}

function addExclamationPoint(str) {
//add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var str2 = str + '!';
  return str2;//code here
}

function combineNames(firstName, lastName) {
  var combined = firstName + ' ' + lastName;
  return combined;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  var total = 'Hello ' + name + '!';
  return total;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var area = length * width;
  return area;//return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var area = (((0.5) * base) * height);
  return area;//return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
return Math.round(Math.PI * Math.pow(radius, 2));
}

function getRectangularPrismVolume(length, width, height) {
  var volume = length * width * height;
  return volume;//return the area of the 3D rectangular prism given the length, width, and height
  //code here

}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
