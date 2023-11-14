// const users = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }

// console.log (user.name)

// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     },
//     john: {
//         age: 21,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log (users.john)
// console.log (users.alex.isAdmin)

// users.john.sayHello('Tom')

// const users = [
//     {
//         name: 'Alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//     name: 'John',
//     age: 22,
//     isAdmin: true
//     },
// ]

// users.push({
//     name: 'Ivan',
//     age: 21,
//     isAdmin: true
// })

// for(let i = 0; i <users.length; i++) {
//     console.log(users[i].name)
//     console.log(users[i].age)
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())


// ==========================ДЗ=======================


// const users = {
//     nikolay: {
//         age: 20,
//         city: 'Orenburg',
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }
// users.nikolay.sayHello('Nikolay')


// --------------- 1 и 2 cделано



const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 21,
        isAdmin: true
    },
    {
        name: 'miya',
        age: 25,
        isAdmin: true
    },
    {
        name: 'tom',
        age: 22,
        isAdmin: false
    }
]

let checkAdmin = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        checkAdmin++
    }
}
console.log(`Количество админов: ${checkAdmin}`)