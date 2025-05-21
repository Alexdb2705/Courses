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
    hasName && name==="Alex" 
    ? console.log(`Hello, ${name}`) 
    : hasName 
    ? console.log(`You not Alex, you ${name}`) 
    : console.log("You no name")

    let result = (hasName && name==="Alex") ? "Bueno" : "Malo"
    console.log(result)
    let result2 = (hasName && name==="Alex") && "good" || "bad"
    console.log(`Result is ${result2}`)

}

// comparisonOperators()
// ifs()

function loops() {
    pass
}

loops()
