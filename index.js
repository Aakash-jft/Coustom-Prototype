let arr = [1, 2, 3, 4];

//the add() method returns the sum of all elements which are Numbers.
Array.prototype.add = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    if (typeof (this[i] == "number")) {
      sum += this[i];
    }
  }
  return sum;
};
console.log(arr.add());

//---------------------------------------------------------------------//

// The break() method returns a portion of an array into a new array
// selected from start to end where start and end represent the index
// of items in that array. The original array will not be modified.

Array.prototype.break = function (start, end) {
  let arr = [];
  if (end == null) {
    end = this.length;
  }
  for (let i = start; i <= end - start; i++) {
    arr.push(this[i]);
  }

  return arr;
};

console.log(arr.break(1, 3));

//--------------------------------------------------------------------//

//The fillNum() method returns a new array which only contains Numbers.
//The original array will not be modified

Array.prototype.fillNum = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] != "number") {
      continue;
    }
    arr.push(this[i]);
  }
  return arr;
};

console.log(arr.fillNum());
