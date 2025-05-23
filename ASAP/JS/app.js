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
// console.log(arrowFunction(1000))

function arrays() {
    let array1 = ["Apples", "Bananas", "Eggs", "Milk"]
    console.log(array1[0])
    console.log(array1[array1.length - 1])

    console.log("")
    console.log("Push:")
    array1.push("Strawberrys")
    console.log(array1[array1.length - 1])
    console.log(array1)

    console.log("")
    console.log("Filters:")
    let filteredArray1 = array1.filter((element) => {
        console.log(element)
    })
    console.log(filteredArray1)
    filteredArray1 = array1.filter((element) => {
        console.log(element)
        return true
    })
    console.log(filteredArray1)
    filteredArray1 = array1.filter((element) => {
        return element.startsWith("A")
    })
    console.log(filteredArray1)
    console.log("Shorter form of doing filtering arrays if only 1 input and 1 line of return:")
    console.log(array1.filter(element => element.startsWith("A")))

    console.log("")
    console.log("Map arrays:")
    let array2 = [1, 2, 3, 4, 5]
    let mappedArray2 = array2.map((element) => {
        return element * 2
    })
    console.log(mappedArray2)
    console.log("Shorter form of mapping arrays if only 1 input and 1 line of return:")
    console.log(array2.map(element => element * 2))
}

const exercise_6_25 = ages => ages.filter(element => element >= 18)

const exercise_6_33_1 = ages => {
    let adultAges = []
    for (let i = 0; i < ages.length; i++) {
        ages[i] >= 18 ? adultAges.push(ages[i]) : i += 0
    }
    return adultAges
}

const exercise_6_33_2 = ages => { let adultAges = []; for (let i = 0; i < ages.length; i++) { ages[i] >= 18 ? adultAges.push(ages[i]) : i += 0 } return adultAges }

const exercise_6_46_1 = USDs => {
    return USDs.map((element) => {
        return element * 1.5
    })
}

const exercise_6_46_2 = USDs => USDs.map(element => element * 1.5)

const exercise_6_50 = USDs => {
    let AUDs = []
    for (let i = 0; i < USDs.length; i++) {
        AUDs.push(USDs[i] * 1.5)
    }
    return AUDs
}

// arrays()
// console.log(exercise_6_25([18, 20, 16, 15, 21]))
// console.log(exercise_6_33_1([18, 20, 16, 15, 21]))
// console.log(exercise_6_33_2([18, 20, 16, 15, 21]))
// console.log(exercise_6_46_1([10, 20, 30, 40]))
// console.log(exercise_6_46_2([10, 20, 30, 40]))
// console.log(exercise_6_50([10, 20, 30, 40]))

function objects() {
    let user = {
        email: "example@gmail.com",
        password: "test12234",
        name: "John Doe",
        discord: "examplediscord",
        subscription: "VIP+",
        lessonsCompleted: [1, 2, 3],
    }
    console.log(user)
    console.log("Email is: " + user.email)
    let users = [
        {
            email: "example@gmail.com",
            password: "test1234",
            name: "John Doe",
            discord: "examplediscord",
            subscription: "VIP+",
            lessonsCompleted: [1, 2, 3],
        },
        {
            email: "newuser@gmail.com",
            password: "test1234",
            name: "Alex",
            discord: "alex_ds",
            subscription: "VIP+",
            lessonsCompleted: [1, 2, 3, 4, 6],
        },
    ]
    nameSearch = "John Doe"
    console.log(users)
    console.log(`Hi ${nameSearch}, you completed lessons: ` + users.filter(element => element.name === `${nameSearch}`)[0].lessonsCompleted)
}
let users_e = []
const exercise_7_06_1 = (userToAdd) => {
    users_e.push(userToAdd)
}

const exercise_7_06_2 = userToAdd => users_e.push(userToAdd)

// objects()
exercise_7_06_1({ email: "e", password: "p", name: "n", discord: "d", subscription: "s", lessonsCompleted: "l" })
exercise_7_06_2({ email: "e", password: "p", name: "n", discord: "d", subscription: "s", lessonsCompleted: "l" })
console.log(users_e)