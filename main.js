// intro
/*alert("Hi, mate!");
console.log("Error:404");
confirm("Вы согласны");
prompt("Сколько тебе лет?");
let x = prompt("Сколько тебе лет?");
alert(x);*/
// variables
// 1
/*let number = 5;
let str = "Hello";
console.log(str);*/
// 2
/*let num = 5;
console.log(num);
num = prompt("Add your num: ");
console.log(num);*/
// 2.3
/* const username = "John"; // flat case
const userName = "John"; // camel case
const user_name = "John"; // snake case
const UserName = "John"; // Pascal case */

// 2.4
/* "use strict";

number = 5;
console.log(number); */
// 2.6
/* 
debugger; */
// 3.2
/* const data = "1";
console.log(typeof data); */
// 3.3
/* const million1 = 1e6;
const million2 = 1_000_000; // same num
console.log(million1);
// шеснацетирич 0123456789ABC....
console.log(0xaf74cd);
// двоичная система
console.log(0b101010101);
// восьмиричная система
console.log(0o257); // до 7 включительно
// дробное число 
console.log(5.5);
// еще есть 2 нуля
console.log(0);
console.log(-0); // одинаково воспринимается */
// 3.4
//"use strict";

/* console.log(1e1000); // in console: Infinity (бесконечность)
console.log(50 / 0); // Infinity (бесконечность) (и да, тут можно делить на ноль)
console.log(50 / -0); // -Infinity (бесконечность) */

/* const num1 = 60 / 0;
const num2 = 60 / 1;
console.log(Number.isFinite(num2)); // "Number.isFinite - Это конечное число?" */

/* const num = 50 / "yes";
console.log(num); // NaN
console.log(typeof num); // type number
console.log(Number.isNaN(num)); // true */

// А также можно использовать без Number, но лучше использовать с ним, так как там многое исправлено.

/* const num = 52;
console.log(typeof num);
console.log(typeof num.toString()); // преобразование в строку, а также можно преобразовать:
console.log(typeof (num + "")); // когда мы плюсуем, то JS смотрит какие типы данных складывается, то он переводит 52 в строку и плюсует, но лучше через ToString().
// а также можно в различных системах исчисления:
console.log(num.toString(2)); // в двоичной
console.log(num.toString(8)); // в восьмиричной 
console.log(num.toString(16)); // в шестнадцатиричной */

// 3.5
//"use strict";

/* const num2 = "   52.332nan232   ";
console.log(num2);
//console.log(+num2); // + - унарный плюс, он работает только с правой частью
console.log(Number.parseFloat(num2)); */

/* const str = prompt("Введите целое число:");

console.log(Number.parseInt(str)); */

/* const str = "-892.123124";
const num = Number.parseInt(str);
console.log(num); */

/* const num = Number.parseInt("10 или 20", 20);
console.log(num); */