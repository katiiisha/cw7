  // реализуйте функцию union(), которая объединит уникальные элементы всех массиов, переданных ей. Пример: union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) вернет [1, 2, 3, 101, 10]

// const myFunc = (...arrays) => Array.from(new Set(arrays.flat()))

// console.log(myFunc([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]))

// const company = {
//     head: 'Ivanov',
//     menager: 'Petrov', 
//     cars: [
//         { mark: 'audi', price: 15, color: 'white' },
//         { mark: 'bmw', price: 18, color: 'red' },
//         { mark: 'mers', price: 20, color: 'grey' }
//     ],
//     stuff: {
//         role: 'cleaner', age: 45, name: 'ira'
//     }, 
//     adress: 'spb, len.pspk'
// }
// console.log(company.cars[2].price);

// console.log(company.stuff.name);

// company.cars.push({ mark: 'lada', price: 0.5, color: 'blue' })
// console.log(company.cars);
// for (let key in company) { 
//     console.log(key);
// }
// company.tel = '89052392026'; // добавляем элемент 
// console.log(company);
// delete company.head // удаляем элемент
// console.log(company);

//
// console.log(1);
// setTimeout(() => {
//     console.log(2); 
// }, 0);

// for (let i = 0; i < 1000; i++) { 
// console.log(33);
// }

// console.log(3);

let a = 7;
setTimeout(() => {
    a = 99;
    console.log(a);
}, 2000);
console.log(a);
let b = new Promise(function(resolve, reject) {
    setTimeout(() => {
        a = 99;
        console.log(a);
    }  
})