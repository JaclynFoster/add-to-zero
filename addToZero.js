// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function myFunction(array) {
for(let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    for(let j = 0; j < array.length; i++) {
        let compareNumber = array[j]
    if (currentNumber === compareNumber) {
        return true
    } 

}
}
return false;
}

console.log(myFunction(array));