// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// let car = {
//   manufacturer: "Volkswagen",
//   model: "Golf GTI",
//   productionYear: 2020,
//   averageSpeed: 100,
//   getInfo: function () {
//     return `Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.productionYear}`;
//   },
//   getTime: function (dis) {
//     let time = dis / this.averageSpeed;
//     return (time += Math.floor(time / 4));
//   },
// };

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.
let obj = {
  numerator: 50,
  divider: 85,
  getAddition: function () {
    return this.numerator + this.divider;
  },
  getSubtraction: function () {
    return this.numerator - this.divider;
  },
  getMultiplication: function () {
    return this.numerator * this.divider;
  },
  getDivision: function () {
    return this.numerator / this.divider;
  },

  calcBiggestDivider: function () {
    let result = 0;
    for (let count = 1; count <= this.divider; count++) {
      if (this.numerator % count == 0 && this.divider % count == 0) {
        result = count;
      }
    }
    return result;
  },
  getReduction: function () {
    let a = this.numerator / this.calcBiggestDivider();
    let b = this.divider / this.calcBiggestDivider();
    return `${a} / ${b}`;
  },
};

// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
  hours: 20,
  minutes: 55,
  seconds: 10,
  calcSeconds: secToAdd + this.seconds,
  calcMinutes: minutesToAdd + time.minutes,
  calcHours: hoursToAdd + time.hours,

  showTime: function () {
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  },
  addSecToTime: function () {
    if (this.calcSeconds > 59) {
      calcMinutes = calcMinutes + 1;
      this.calcSeconds = this.calcSeconds - 60;
    }
  },
};

function caclTime() {
  let calcSeconds = secondsToAdd + time.seconds,
    calcMinutes = minutesToAdd + time.minutes,
    calcHours = hoursToAdd + time.hours;

  if (calcSeconds > 59) {
    calcMinutes = calcMinutes + 1;
    calcSeconds = calcSeconds - 60;
  }
  if (calcMinutes > 59) {
    calcHours = calcHours + 1;
    calcMinutes = calcMinutes - 60;
  }
  return getTime(calcHours, calcMinutes, calcSeconds);
}

let result = `${getTime(time.hours, time.minutes, time.seconds)} + ${getTime(
  hoursToAdd,
  minutesToAdd,
  secondsToAdd
)} = ${caclTime()}`;
