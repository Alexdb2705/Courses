// Basic Types
let age: number = 29
let course: string = "TypeScript"
let lessonCompleted: boolean = true
let x: any = "Not recommended because TypeScript power is when types are set"

let courses: string[] = ["HTML", "CSS", "JS", "TypeScript"]
let arr: any[] = [true, "123", 321]
let stringArr: string[][] = [['a'], ['b']]
let arrofarr: any[][] = [[true], ['c'], [123]]

// Tuples
let person: [string, number] = ["John", 25]
let people: [string, number][] = [
    ["Alex", 23],
    ["John", 25],
]

// Objects
let student: {
    name: string,
    age: number,
    isPassing: boolean,
} = {
    name: "Alex",
    age: 23,
    isPassing: true
}

// Custom Types
type Student = {
    name: string,
    age: number,
    isPassing: boolean,
}

let student1: Student = {
    name: "Alex",
    age: 23, 
    isPassing: true,
}

// Interfaces
interface Student1 {
    name: string,
    age: number,
    isPassing: boolean,
}

let student2: Student1 = {
    name: "John",
    age: 18, 
    isPassing: true,
}

// Unions
let result: string | number = 25
result = "Correct"

type isPassing = "passed" | "failed"
let johnIsPassing: isPassing = "passed"

// Type Assertion