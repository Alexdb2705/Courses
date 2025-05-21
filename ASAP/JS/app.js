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
null_undefined()

