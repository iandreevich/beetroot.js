// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let auditoriums = [
  {
    name: "Computer class 1",
    size: 15,
    faculty: "IT",
  },
  {
    name: "Computer class 2",
    size: 19,
    faculty: "IT",
  },
  {
    name: "Phys laboratory 1",
    size: 16,
    faculty: "Physics",
  },
  {
    name: "Phys laboratory 2",
    size: 13,
    faculty: "Physics",
  },
  {
    name: "English class",
    size: 12,
    faculty: "Foreign Languages",
  },
  {
    name: "Deutsch class",
    size: 18,
    faculty: "Foreign Languages",
  },
];

let group = {
  number: 481,
  person: 20,
  faculty: "IT",
};

function showAuditoriums(arr) {
  for (i = 0; i < arr.length; i++)
    console.log(
      `Аudience: ${arr[i].name}, faculty: ${arr[i].faculty}, Audience size: ${arr[i].size} seats`
    );
}
// showAuditoriums(auditoriums);

function showAuditoriumsForFaculty(arr, item) {
  let res = arr.filter((x) => x.faculty === item);
  for (i = 0; i < res.length; i++) {
    console.log("Audience for your faculty: " + res[i].name);
  }
}
// showAuditoriumsForFaculty(auditoriums, "Physics");

function showAuditoriumsForGroup(arr, group) {
  let res = arr.filter(
    (x) => x.faculty === group.faculty && x.size >= group.person
  );
  for (i = 0; i < res.length; i++) {
    console.log("Audience for your group: " + res[i].name);
  }
}
showAuditoriumsForGroup(auditoriums, group);

function showAuditoriumsBySize(arr) {
  arr.sort(function compareNumbers(a, b) {
    return a.size - b.size;
  });
  console.log(arr);
}
// showAuditoriumsBySize(auditoriums);

function showAuditoriumsByABC(arr) {
  arr.sort((prev, next) => {
    if (prev.name < next.name) return -1;
    if (prev.name < next.name) return 1;
  });
  console.log(arr);
}
// showAuditoriumsByABC(auditoriums);
