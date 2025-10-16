//! create an object with key and value pairs
// objects can be nested
let myObject = {
  name: "Philipp",
  age: 32,
  job: function () {
    console.log("Azubi");
  },
  good_guy: true,
};

//! function call with dot notation
console.log(myObject.name);

//! function call with bracket notation
console.log(myObject["name"]);

//! Object and Arrays better show with "console.table"
// not good for nested objects
console.table(myObject);

//! call the function of the object myObject with the name "job"
// this is then called a "method" of the object
myObject.job();

//! "Object.keys()" - get all keys of the object as an array
let objectKeys = Object.keys(myObject);
let ourArray = [];

//! make an array from the object values
for (let i = 0; i < objectKeys.length; i++) {
  ourArray.push(myObject[objectKeys[i]]);
}

console.log(ourArray);

//! "Object.entries()" - get all entries of the object as nested arrays
console.log(Object.entries(myObject));

/* Output:
(4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ['name', 'Philipp']
1: (2) ['age', 32]
2: (2) ['job', ƒ]
3: (2) ['good_guy', true]
length: 4
*/
