// Lesson 1

// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// const str = "abcde";
// alert(str[0]);
/// alert(str[str.length-1]);

// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.

// const str = "string not starting with capital";

// const letters = str.slice(1);
// const firstLetter = str[0].toUpperCase() + letters;

// const firstLetter = str.replace('s', 'S');

// console.log(firstLetter);

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;

/*
 * Шаблонные строки
 * Написать фразу с помощью конкатенации и шаблонных строк
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
 */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';
// const message = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// const message2 =
//     "Hello, my name is " + name + ", I'm " + age + " years old and I like " + hobby;
// console.log(message);
// console.log(message2);

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

// let salary = +prompt("Enter your salary");
// salary *= 1.15;
// alert(`Your salary + bonus is ${salary}`);
// salary *= 0.9;
// alert(`Your salary + bonus after tax is ${salary}`);
// salary -= 190;
// alert(`After shopping your salary is ${salary}`);
// salary /= 2;
// alert(`Your wife took the half your salary. The change is ${salary}`);

// console.log(salary);

//Створіть функцію endsWith(), яка порівнює підрядок str1 із закінченням вихідного рядка
//str і визначає чи закінчується рядок символами підрядка.
// const str = "Кожен мисливець бажає знати";
// const str1 = "скрипт";
// const str2 = "знати";

// function endsWith(str, substring) {
//     // return endsWith.str(substring);
//     return str.includes(substring, -substring.length);
// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

// let total = 0;
// for (let i = 0; i <= 10; i += 1) {
//   total += i;
// }
// console.log(total);

// let index = 0;
// let total2 = 0;
// while (index <= 10) {
//   total2 += index;
//   index += 1;
// }
// console.log(total2);

// let index2 = 0;
// let total3 = 0;
// do {
//   total3 += index2;
//   index2 += 1;
// } while (index2 <= 10);
// console.log(total3);


function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
  return Object.keys(object).length;

  // for (const key in object) {
  //   if (object.hasOwnProperty(key)) {
  //     propCount += 1;
  //   }
  // }

  // return propCount;
  // Change code above this line
}