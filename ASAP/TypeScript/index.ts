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
let y: any = "hello"
y = <number> 22
y = <string> "hi"

// Functions
function sum(num1: number, num2: number): number {
    return num1 + num2
}

sum(1, 2)

function greet(): void {
    console.log('Hello!')
}

// Generics

type string_number = string | number

function getFirstElementArray(arr: string_number[]): string_number {
    return typeof (arr[0]) === "string" ? arr[0].toUpperCase() : arr[0]
}

getFirstElementArray(['a', 123])

function getFirstElement(arr: number[]): number {
    return arr[0]
}

getFirstElement([1, 12, 3])

function getFirstElementParam<ArrType>(arr: ArrType[]): ArrType {
    return arr[0]
}

let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['a', 'b', 'c']
let number_result: number = getFirstElementParam<number>(arr1)
let string_result: string = getFirstElementParam<string>(arr2)

// Enums (when a variable can choose between different values )

enum Grade {
    freshman = "First year student in high school",
    sophomore = "Second year student in high school",
    junior = "Third year student in high school",
    senior = "Fourth year student in high school",
}

interface StudentObject {
    name: string,
    age?: number, // The ? is to make it optional
    grade: Grade,
}

function displayStudentInfo(student: StudentObject): void {
    const studentInfo: string = student.name + "\n" + student.age + "\n" + student.grade

    document.body.innerHTML = studentInfo
}

// displayStudentInfo({
//     name: "John", 
//     age: 15, 
//     grade: Grade.sophomore})

displayStudentInfo({
    name: "Alex", 
    grade: Grade.senior})

