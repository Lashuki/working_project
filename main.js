
import isOdd from "is-odd"
import isEven from "is-even"

console.log("რიცხვი კენტია თუ არა", isOdd("2255"))
console.log("რიცხვი ლუწია თუ არა", isEven("2221"))
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]

arr3.forEach(item => {
    console.log(item)
})

console.log("--------------------");




function helloXTimes(fun, times) {
    for (let i = 0; i <= times; i++) {
        fun(i)
    }
}

helloXTimes((text) => {
    console.log(`hi ${text}`)
}, 6)


console.log("------------------------")

const arr = [9, 8, 7, 6];

function myForEach(array, f) {
    for (let i = 0; i < array.length; i++) {
        f(array[i])
    }
}

myForEach(arr, (item) => {
    console.log(item)
})

console.log("----------------")

function myMap(array, f) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(f(arr[i]))
    }
    console.log(newArr)
    return newArr;
    
}

myMap(arr, (item) => item * 2)