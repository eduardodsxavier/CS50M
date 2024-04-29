function makeFunctionArray() {
    const arr = []

    // code don't work because of the scope of the data var
    // the code will work if we use a let 
    for (var i = 0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }

    return arr
}

const arr = makeFunctionArray()

arr[0]()

