//Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними методами.

// const vegetables = ["Капуста", "Ріпа", "Редиска", "Морква"];

// console.log(vegetables); // "Капуста, Ріпа, Редиска, Морква"

// let result = "";

// for (const veg of vegetables) {
//   result += veg + ",";
// }

// const res = result.slice(0, result.length - 1);
// console.log(res);

//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

// var arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
//   function removeDuplicates(arr) {
//   const elements = [];
//   for (const el of arr) {
//     if (!elements.includes(el)) {
//       elements.push(el);
//     }
//     }
//     return (elements);
// };
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const result = removeDuplicates(arr);
// console.log(elements); // [php,css,script,html,java]

// Напишіть функцію filterFalse(arr), яка очищає масив від хибних (false) значень: false,
//null, undefined, 0, –0, NaN та "" (пустий рядок).
// const array = [NaN, 0, 77, false, -17, "", undefined, 99, null];

// function filterFalse(arr) {
//   const elements = [];
//   for (const el of arr) {
//     if (el) {
//       elements.push(el);
//     }
//   }
//   return elements;
// }

// console.log(filterFalse(array)); // [ 77, -17, 99 ]

// const items = [];

// const items2 = Array(123)
// console.log(items);
// console.log(items2);

/*
 * Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.
 */

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// function copyArr(clients) {
//   // return clients.slice();
//   return [...clients];
// }

// const copyClients = copyArr(clients);

// console.log(copyClients);
// console.log(copyClients === clients); //false(це копія)

// Напишіть функцію union, яка повертає масив, що складається тільки з унікальних
//елементів масиву.
// const array1 = [5, 2, 1, -10, 8, 5, 2, 1, -9, 3, 7];

// const union = function (array) {
//   const newArr = [];
//   for (const el of array1) {
//     if (array.indexOf(el)===array.lastIndexOf(el)){
//       newArr.push(el);

// }  }
//   return newArr;
// };
// console.log(union(array1)); // [-10,8,5,2,1,-9,3,7]

/*
 * Напиши скрипт, який, для об'єкта user, послідовно:

* додає поле mood зі значенням 'happy'
* замінює значення hobby на 'skydiving'
* замінює значення premium на false
* виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: 'John',
//   age: 21,
//   hobby: 'css',
//   premium: true,
// };
// const key = 'mood';
// // user.mood = 'happy';
// /*
// * АБО */
// user[key] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(key, user[key]);
// }
//

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);

// let sum = 0;
//  for (const value of values) {
//    sum += value;
// }
// console.log(sum);

// Напишіть деструктуруюче присвоєння, яке:

// значення властивості name додати змінній name.
// значення властивості years додати змінній age.
// властивість isAdmin присвоює змінну isAdmin (false, якщо немає такої властивості)

// let user = {
//   name: "John",
//   years: 30,
// };

// const { name, years: age, isAdmine = false } = user;
// console.log(name, age, isAdmine);


//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

// function isPlainObject(par) {
//   // if (typeof par === 'object' && !Array.isArray(par) && par) {
//   //   return true;
//   // }
//   // return false;
//   return typeof par === "object" && !Array.isArray(par) && par!==null;
// }

// console.log(isPlainObject({ a: 1 })); // true
// console.log(isPlainObject([])); // false
// console.log(isPlainObject(null)); // false
// console.log(isPlainObject(1)); // false
// console.log(isPlainObject(undefined)); // false

/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Бриліант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(array, stoneName) { 
//   for (const stone of array){
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
//   return 'not found';
// }

// console.log(calcTotalPrice(stones, 'Ізумруд'));
// console.log(calcTotalPrice(stones, 'Цегла'));

//Опис завдання: Напишіть функцію, яка повертає новий об'єкт без зазначених значень.
// Очікуваний результат: ({ a: 1, b: 2, c: 3 }, 'b', 'c') => { a: 1 }

const data = { a: 1, b: 2, c: 3 };
function without(obj, ...args) {
  const newObj = { ...obj }
  for (const key of args) {
    delete newObj[key];
  }
  return newObj;
}

console.log(without(data, 'b', 'c')); // { a: 1 }


