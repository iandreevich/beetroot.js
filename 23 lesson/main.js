// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.

// let a = +prompt("Введите начало диапозона");
// let b = +prompt("Введите конец диапозона");
// let res = 0;

// while (a < b) {
//   a++;
//   res += a;
// }
// console.log(res);

// 2 Запросить 2 числа и найти только наибольший общий делитель.
// let a = +prompt("Введите число");
// let b = +prompt("Введите число 2");
// let res = 0;

// while (a != 0 && b != 0)
//   if (a > b) {
//     a = a % b;
//   } else {
//     b = b % a;
//   }
// console.log(a + b);

//  3 Запросить у пользователя число и вывести все делители этого числа.

// let a = +prompt("Введите число");
// let arr = [];
// for (let i = 2; i <= a; i++) {
//   if (a % i === 0) arr.push(i);
// }
// alert(arr);

// 4 Определить количество цифр в введенном числе.
// let n = +prompt("Введите число");

// for (i = 0; n > 1; i++) {
//   n /= 10;
// }
// console.log(i);

// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных.
// Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// let string = prompt("Введите 10 чисел (пример: 1, 2, 4, 5...");
// let arr = string.split(",");
// let posNum = [];
// let negNum = [];
// let nulls = [];
// let even = [];
// let odd = [];

// for (let i = 0; arr.length > i; i++) {
//   if (arr[i] > 0) posNum.push(arr[i]);
//   if (arr[i] < 0) negNum.push(arr[i]);
//   if (arr[i] == 0) nulls.push(arr[i]);
//   if (arr[i] % 2 === 0) even.push(arr[i]);
//   if (arr[i] % 2 != 0) odd.push(arr[i]);
// }

// console.log(
//   `Положительных чисел: ${posNum.length}, негативных чисел : ${negNum.length}, нулей: ${nulls.length}, четных чисел: ${even.length} нечетных чисел:: ${odd.length}`
// );

// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// do {
//   let num1 = +prompt("Введите число 1");
//   let num2 = +prompt("Введите число 2");
//   let char = prompt("Введите знак (+, -, /, *)");

//   if (char == "+") {
//     alert(num1 + num2);
//   } else if (char == "-") {
//     alert(num1 - num2);
//   } else if (char == "/") {
//     alert(num1 / num2);
//   } else if (char == "*") {
//     alert(num1 * num2);
//   } else {
//     alert("Введите коректно знак");
//   }
// } while (confirm("Хотите ли вы решить еще один пример?"));

// 7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

// let str = prompt("Введите число!");
// let a = prompt("На сколько цифр его сдвинуть?");

// console.log(str.slice(a) + str.slice(0, a));

// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

// let days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];

// let exit = false;
// let i = 0;
// for (; i < days.length && !exit; i++) {
//   if (confirm(`${days[i]}. Хотите увидеть следующий день?`)) exit = false;
//   else exit = true;
// }
// if (i === 7) i = 0;