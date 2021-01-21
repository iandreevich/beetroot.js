// 1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function getNumber(num1, num2) {
//   if (num1 < num2) alert("-1");
//   else if (num1 > num2) alert("1");
//   else if (num1 == num2) alert("0");
// }
// getNumber(+prompt("Ввведите число "), +prompt("Ввведите число 2"));

// 2 Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
// let res = factorial(+prompt("Ввведите число "));
// alert(res);

// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// let num = prompt("Ввведите число ");
// let num2 = prompt("Ввведите число 2 ");
// let num3 = prompt("Ввведите число 3 ");
// function getNumber(n, n2, n3) {
//   alert(n + n2 + n3);
// }
// getNumber(num, num2, num3);

// 4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calcSquare(length, width) {
//   if (length > 0 && width > 0) return length * width;
//   else if (length == 0) return width * width;
//   else if (width == 0) return length * length;
// }
// let res = calcSquare(+prompt("Ввведите длину"), +prompt("Ввведите ширину"));
// alert(res);

// 5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
// function checkPerfectNumber(num) {
//   let sum = 0;
//   for (i = 1; i < num - 1; i++) {
//     if (num % i === 0) sum += i;
//   }
//   if (sum === num) console.log(num + " - совершенное число");
//   else console.log(num + " - не совершенное число");
// }

// checkPerfectNumber(+prompt("Введите число"));

// 6 Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
// function checkPerfectNumber2(start, end) {

// function checkPerfectNumber2(start, end) {
//   for (i = start; i < end; i++) {
//     sum = 0;
//     for (n = 1; n < i; n++) {
//       if (i % n === 0) sum += n;
//     }
//     if (i === sum) console.log("совершенное ", i);
//   }
// }

// checkPerfectNumber2(+prompt("Начало диапозона"), +prompt("Конец диапозона"));

// 7 Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// const getTime = (hours, min, sec) => `${hours}:${min || "00"}:${sec || "00"}`;
// console.log(getTime(24, 24, 70));

// 8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// const caclSec = (hours, min, sec) => hours * 3600 + min * 60 + sec;

// console.log(caclSec(11, 10, 42));

// 9 Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// function caclSecToHours(sec) {
//   let hours = sec / 3600;
//   let min = sec / 60 - Math.floor(hours) * 60;
//   sec = sec - Math.floor(min) * 60 - Math.floor(hours) * 3600;
//   return `${Math.floor(hours)}:${Math.floor(min)}:${Math.floor(sec)}`;
// }
// console.log(caclSecToHours(40242));
