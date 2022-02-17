let id = 5; // inferred type
let company: string = 'hey';
let published: boolean = true;
let x: any = 'hello';
// assigment after initialization
let age: number;
age = 30; 

// array, c-like typing
let ids: number[] = [1,2,3,4,5];
//ids.push('hey'); // error, not a number

// allow any type
let arr: any[] = [1, 'hey', true];

// Tuple
let person: [number, string, boolean] = [1, "hey", true];
//person = [1, "hey", 100]; // error, 100 is not a boolean

// Tuple array
let employee: [number, string][];

employee = [
    [1, "hey"],
    [2, "ho"],
]

// Unions (set of allowed types)
let pid: string | number = 22;
pid = "hey"; // ok

// Enum
// These get values assigned automatically (UP=0, DOWN=1, LEFT=2, ...)
enum Direction1 {
    UP, DOWN, LEFT,RIGHT
}

console.log(Direction1.RIGHT) // 3

// Enum with defined values
enum Direction2 {
    UPS = 'up',
    DOWN = 'down',
}

// Type assertion
let cid: any = 1;
let customerId1 = <number>cid; // asserts that cid is a number
let customerId2 = cid as number; // same

// Functions
// arguments are implicitely "any" if not defined
// return values are added just like in php (function x(...): [type])
function addNum(x: number, y: number): number {
    return x + y;
}

// void type exists for functions
function log(message: string | number): void {
    console.log(message);
}

// Objects inline type
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'john'
}

// Defining an object type
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: 'john'
}

// Types can be a union of other types (interfaces can't):
type Point = number | string;
const p1: Point = 1;

// Interfaces
// the readonly and ? modifiers work for type definitions too
interface UserInterface {
    readonly id: number, // readonly modifier does what it says
    name: string,
    age?: number // ? indicates an optional property
}

const user3: UserInterface = {
    id: 1,
    name: 'john'
}

// There are also function interfaces
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y;
const sub: MathFunc = (x:number, y:number): number => x - y;

// log(true); // error
// let x = log('hey'); // error because of void return type

// Classes
// Most of this is like vanilla ES6+ JS
class Person {
    private _id: number;
    name: string; // public is default

    constructor(id: number, name: string) {
        this._id = id;
        this.name = name;
    }

    get id(): number { // can now be accessed with object.id
        return this._id;
    }
    
    register(): string {
        return `${this.name} is now registered`;
    }
}

const brad = new Person(1, 'Brad');
console.log(brad.register());

// Class interfaces 
interface PersonInterface {
    readonly id: number;
    name: string;
    age?: number; 
    
    register(): string;
}

class OtherPerson implements PersonInterface {
    readonly id: number;
    name: string;
    age?: number;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register(): string {
        return `${this.name} is now registered`;
    }
}

// Inheritance / subclassing
class OPwithPosition extends OtherPerson {
    position: string;
    
    constructor(id: number, name: string, position:string) {
        super(id, name);
        this.position = position;
    }
}

// Generics
// lets you give a placeholder for a type that you can fill on call or instantiation
function getArray<T>(items: T[]): T[] { 
    return new Array().concat(items);
}

let numArr = getArray<number>([1,2,3,4]);
let strArr = getArray<string>(['a', 'b', 'joe']);

numArr.push(5); // fine
//numArr.push('hello'); // error
strArr.push('hello'); // fine
