// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// const result = sumNumbers(3, 10)
// console.log(result)
// console.log(sumNumbers(-2, 3))

// const users = ['John', 'Ann', 'Alex', 'Max']
// const numbers = [1, 2, 3]

// const checkForCopyItem = (array, item) => {
// function checkForCopyItem (array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in array'

// }
// console.log(checkForCopyItem(users, 'Alex'))
// console.log(checkForCopyItem(users, 123))
// console.log(checkForCopyItem(numbers, 5))
// console.log(checkForCopyItem(numbers, 2))


// =======================ДЗ===========================


const users = ['Kolya', 'Galya', 'Oksana', 'Artem']
function checkForCopyItem(users, item) {
    for (let i = 0; i < users.length; i++) {
        if (users[i] === item) {
            return `Hello ${item}`
        }
    }
}
console.log(checkForCopyItem(users, 'Artem'))

console.log('')
console.log('1 сделано')
console.log('')

// ------------

const numbers = [5, 20, 10, 34, 4, 5, 6, 77]
let value = 10
function checkNumbers(numbers, value) {
    for (let a = 0; a < numbers.length; a++) {
        if (numbers[a] >= value) {
            console.log(numbers[a])
        }
    }
}
console.log(checkNumbers(numbers, value))

console.log('')
console.log('2 сделано')
console.log('')

// ----------------

function calcNumbers(firstNumber, secondNumber, operator) {
    if (operator === 'plus') {
        return firstNumber + secondNumber
    }
    if (operator === 'minus') {
        return firstNumber - secondNumber
    }
    if (operator === 'multiply') {
        return firstNumber * secondNumber
    }
    if (operator === 'divide') {
        return firstNumber / secondNumber
    }
}
const result = calcNumbers(8, 2, 'divide')
console.log(result)