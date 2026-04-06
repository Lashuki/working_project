


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2]
console.log(arr3);
console.log("--------------------"); 

const languages = ["JavaScript", "Node.js", "React"];

const iterator = languages.entries();



document.addEventListener('click', (event) => {
    console.log(event); 
});
console.log("ssssss")

console.log(iterator.next().value); // [0, "JavaScript"]
console.log(iterator.next().value); // [1, "Node.js"]
console.log(iterator.next().value); // [2, "React"]

