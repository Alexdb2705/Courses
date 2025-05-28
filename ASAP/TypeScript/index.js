"use strict";
// Basic Types
let age = 29;
let course = "TypeScript";
let lessonCompleted = true;
let x = "Not recommended because TypeScript power is when types are set";
let courses = ["HTML", "CSS", "JS", "TypeScript"];
let arr = [true, "123", 321];
let stringArr = [['a'], ['b']];
let arrofarr = [[true], ['c'], [123]];
// Tuples
let person = ["John", 25];
let people = [
    ["Alex", 23],
    ["John", 25],
];
// Objects
let student = {
    name: "Alex",
    age: 23,
    isPassing: true
};
let student1 = {
    name: "Alex",
    age: 23,
    isPassing: true,
};
let student2 = {
    name: "John",
    age: 18,
    isPassing: true,
};
// Unions
let result = 25;
result = "Correct";
let johnIsPassing = "passed";
// Type Assertion
let y = "hello";
y = 22;
y = "hi";
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
function greet() {
    console.log('Hello!');
}
function getFirstElementArray(arr) {
    return typeof (arr[0]) === "string" ? arr[0].toUpperCase() : arr[0];
}
getFirstElementArray(['a', 123]);
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 12, 3]);
function getFirstElementParam(arr) {
    return arr[0];
}
let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
let number_result = getFirstElementParam(arr1);
let string_result = getFirstElementParam(arr2);
