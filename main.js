
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
    for(let i = 0; i <= times; i++) {
        fun(i)
    }
}

helloXTimes((text)=> {
    console.log(`hi ${text}`)
}, 6)

