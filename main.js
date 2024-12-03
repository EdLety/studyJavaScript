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

// 3.6
/* "use strict";

console.log(2 ** 53 - 1); // это пограничное число, это значит что дальше компьютер будет считать неправильно
console.log(Number.MAX_SAFE_INTEGER); // данное пограничное число. */

// 3.7
//"use strict";

/* console.log(Math.round(24.7)); // округляет до целой части (как в математике)
console.log(Math.floor(24.7)); // округляет в меньшую сторону
console.log(Math.ceil(24.7)); // округляет в большую сторону
console.log(Math.trunc(24.7)); // отрубает дробную часть */

// как оставить 2 знака после запятой (бред конечно огромный)
/* const num = 24.3456;

// по этапам
console.log(num);
console.log(num * 100);
console.log(Math.trunc(num * 100));
console.log(Math.trunc(num * 100) / 100);
// Итог:
console.log(Math.trunc(num * 100) / 100);
//Но есть готовый вариант:
console.log(num.toFixed(2)); // но тут возвращает строку и округляет как в математике */
// задачки для полоумных
/* const price = 6.39;
const quantity = 8;

console.log(Math.trunc((price * quantity) * 100) / 100); */

// 3.8
//"use strict"

/* console.log(Math.min(2, 5, -4, 1)); // min
console.log(Math.random()); // случайное число, от 0 до 1
console.log(Math.trunc(Math.random()* 10)); // случайное число, от 0 до 10 */

// tasks
// 1 - done

// 2 - done
/* const min = 1;
const max = 6;
let random;
random = Math.trunc(Math.random() * (max - min) + min); // 0 до 1 * (6 - 1)
console.log(random) */

// 3.9
//"use strict"

/* const str = `
HI.
Bye.
`; */

//console.log('Hi \'Pavel\'');

// 3.10
/* "use strict";

const str = "  Hello Guys!  "
//const num = 25.25;
//console.log(String(num));

// Methods to String
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.trim()); // Пробелы сначала и с конца убирает
console.log(str.repeat(5)); // Повторить строку 5 раз */

// 3.11
/* "use strict";

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

const BigNum = 47823648263423423423n;
console.log(typeof BigNum) */
// 3.12
/* "use strict";

const greaterThen = 5 < 3;
console.log(greaterThen);

console.log(5, Boolean(5)); // true
console.log(0, Boolean(0)); // false
console.log(null, Boolean(null)); // false
console.log(undefined, Boolean(undefined)); // false
console.log(NaN, Boolean(NaN)); // false
console.log(50n, Boolean(50n)); // true
console.log(0n, Boolean(0n)); // false
console.log("False", Boolean("False")); // true
console.log("", Boolean("")); // false */
// 3.13
/* "use strict";

const syn1 = Symbol("1");
const syn2 = Symbol("1");
console.log(syn1 == syn2); // false
console.log(syn1);
console.log(syn2); */
// 3.14
//"use strict";


/* // 3.15
"use strict";

const user = {
    firstName: "Eddy",
    age: 26,
    surName: "Nuss"
};

console.log(user); */
/* // 3.16
"use strict"; */

// 4.2
//"use strict";

// console.log(5 + 3);
// console.log(5 - 3);
// console.log(5 / 3);
// console.log(5 * 3);
// console.log(5 ** 3);
// console.log(5 % 3);
// console.log();

/* const num = 18;
console.log(Math.floor((num % 100) / 10)); // пиздец, нет целочисленного деления (WTF) */