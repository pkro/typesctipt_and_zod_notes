"use strict";
let id = 5; // inferred type
let company = 'hey';
let published = true;
let x = 'hello';
// assigment after initialization
let age;
age = 30;
// array, c-like typing
let ids = [1, 2, 3, 4, 5];
//ids.push('hey'); // error, not a number
// allow any type
let arr = [1, 'hey', true];
// Tuple
let person = [1, "hey", true];
//person = [1, "hey", 100]; // error, 100 is not a boolean
// Tuple array
let employee;
employee = [
    [1, "hey"],
    [2, "ho"],
];
// Unions (set of allowed types)
let pid = 22;
pid = "hey"; // ok
// Enum
// These get values assigned automatically (UP=0, DOWN=1, LEFT=2, ...)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.RIGHT); // 3
// Enum with defined values
var Direction2;
(function (Direction2) {
    Direction2["UPS"] = "up";
    Direction2["DOWN"] = "down";
})(Direction2 || (Direction2 = {}));
// Type assertion
let cid = 1;
let customerId1 = cid; // asserts that cid is a number
let customerId2 = cid; // same
// Functions
// arguments are implicitely "any" if not defined
// return values are added just like in php (function x(...): [type])
function addNum(x, y) {
    return x + y;
}
// void type exists for functions
function log(message) {
    console.log(message);
}
// Objects inline type
const user = {
    id: 1,
    name: 'john'
};
const user2 = {
    id: 1,
    name: 'john'
};
const p1 = 1;
const user3 = {
    id: 1,
    name: 'john'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// log(true); // error
// let x = log('hey'); // error because of void return type
// Classes
// Most of this is like vanilla ES6+ JS
class Person {
    constructor(id, name) {
        this._id = id;
        this.name = name;
    }
    get id() {
        return this._id;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
console.log(brad.register());
class OtherPerson {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Inheritance / subclassing
class OPwithPosition extends OtherPerson {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Generics
// lets you give a placeholder for a type that you can fill on call or instantiation
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['a', 'b', 'joe']);
numArr.push(5); // fine
//numArr.push('hello'); // error
strArr.push('hello'); // fine
