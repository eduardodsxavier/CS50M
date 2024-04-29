// deepCopy objects in javaScript
function deepCopy(obj) {
    const objectCopy = {}

    const keys = Object.keys(obj)
// pass for every var in a object
    for (let i = 0; i < keys.length; i++) {
    // verify if thats var is a object
        let key = keys[i]
        if (typeof obj[key] === "object") {
            objectCopy[key] = deepCopy(obj[key])
        }
        else {
            objectCopy[key] = obj[key]
        }
    }
    return objectCopy
}

const obj1 = {
    a: 1,
    b: 2,
    c: {
        a: 3,
        b: 4
    }
}
const obj2 = Object.assign({}, obj1)

const obj3 = deepCopy(obj1)

obj1.a = 2

console.log("obj1.a : " + obj1.a + "\nobj2.a : " + obj2.a + "\nobj3.a : " + obj3.a)


obj1.c.a = 1

console.log("obj1.c.a : "+ obj1.c.a + "\nobj2.c.a : " + obj2.c.a + "\nobj3.c.a : " + obj3.c.a)
