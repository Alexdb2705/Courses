function strings() {
    console.log("Hello " + "World");
    let name_o = "Alex"
    console.log(name_o[0])
    console.log(name_o[3])
    console.log(name_o[name_o.indexOf("x")])
    console.log(name_o[name_o.length - 1])
    for (let index = 0; index < name_o.length; index++) {
        console.log(name_o[index]);
    }
}

function numbers() {

}

function booleans() {
    let comparing = 40 > 30
    if (comparing) {
        console.log("True")
    } else {
        console.log("False")
    }
}

function null_undefined() {

}

// strings()
// numbers()
// booleans()
// null_undefined()


function comparisonOperators() {
    const year = 2025;
    console.log("2025" == year);
    console.log("2025" === year);
    console.log("2025" != year);
    console.log("2025" !== year);
}

function ifs() {
    const hasName = true
    const name = "Alex"
    if (hasName && name === "Alex") {
        console.log(`Hey, ${name}`)
    }
    hasName && name === "Alex"
        ? console.log(`Hello, ${name}`)
        : hasName
            ? console.log(`You not Alex, you ${name}`)
            : console.log("You no name")

    let result = (hasName && name === "Alex") ? "Bueno" : "Malo"
    console.log(result)
    let result2 = (hasName && name === "Alex") && "good" || "bad"
    console.log(`Result is ${result2}`)

}

// comparisonOperators()
// ifs()

function loops() {
    let i = 0
    while (i < 5) {
        console.log(String(i))
        console.log(i)
        i++
    }

    for (let _ = 0; _ < 5; _++) {
        console.log("Hi")
    }

    for (let i = 0; i < 5; i++) {
        console.log(`i = ${i}`)
    }
}

function exercise_5_05() {
    for (let i = 1; i <= 15; i++) {
        !(i % 5)
            ? console.log(`${i} - ASAP Frontend`)
            : !(i % 2)
                ? console.log(`${i} - Frontend`)
                : console.log(`${i} - ASAP`)
    }
}

function exercise_5_20() {
    let course = "ASAP Frontend"
    for (let i = 0; i < course.length; i++) {
        console.log(course[i])
    }
}

// loops()
// exercise_5_05()
// exercise_5_20()

function functions() {
    return "Heyy, Alex"
}

function exercise_5_48(USD) {
    return USD * 1.5
}

const arrowFunction = (USD) => {
    return USD * 1.5
}

// console.log(functions())
// console.log(exercise_5_48(1000))
console.log(arrowFunction(1000))
