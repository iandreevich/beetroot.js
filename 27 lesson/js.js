// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

class Circle {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get diametr() {
    return this.r * 2;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
  circumference() {
    return Math.PI * this.diametr;
  }
}

let circle = new Circle(15);
console.log(circle.radius);
console.log("Diametr is " + circle.diametr);
console.log("Area is " + circle.area().toFixed(1));
console.log("Circumference is " + circle.circumference().toFixed(1));

//  Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
// Продемонстрировать работу написанных методов.

class Marker {
  constructor(color, percent) {
    (this.color = color), (this.percent = percent);
  }
}

class MarkerWithPercentInk extends Marker {
  constructor(color, percent) {
    super(color, percent);
  }
  print(text) {
    let textLength = this.percent / 0.5;
    let textColor = text.substring(0, textLength);
    let arr = textColor.split("");
    let countSpaces = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == " ") {
        countSpaces += 1;
      }
    }
    textLength += countSpaces;
    textColor = text.substring(0, textLength);

    return document.write(`<p style = color:${this.color}>${textColor}</p>`);
  }
}

let marker = new MarkerWithPercentInk("red", 7);
marker.print(
  "Success is the ability to go from failure to failure without losing your enthusiasm."
);

// Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

let divContent = document.getElementById("content");

let tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "tableDiv");
tableDiv.className = "tableDiv";

let tableTag = document.createElement("table");
tableTag.setAttribute("id", "table");
tableTag.className = "table";

tableDiv.append(tableTag);
divContent.append(tableDiv);

class Employee {
  constructor(name, nickname, age, team, expierense) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.team = team;
    this.exp = expierense;
  }
}

let arrOfEmp = [
  new Employee("Egor Vasilyev", "flamie", 23, "Natus Vincere", 9),
  new Employee("Aleksandr Kostyliev", "s1mple", 23, "Natus Vincere", 8),
  new Employee("Denis Sharipov", "electronic", 22, "Natus Vincere", 6),
  new Employee("Kirill Mikhailov", "Boombl4", 22, "Natus Vincere", 4),
  new Employee(" Ilya Zalutskiy", "Perfecto", 21, "Natus Vincere", 4),
];

// console.log(arrOfEmp);

class EmpTable {
  constructor(arr) {
    this.arr = arr;
  }
  getHtml() {
    let table = document.getElementById("table");
    let array = this.arr;

    let head = document.createElement("tr");
    head.setAttribute("style", "font-size: 18px;");

    let th1 = document.createElement("th");
    th1.textContent = "Name";
    let th2 = document.createElement("th");
    th2.textContent = "Nickname";
    let th3 = document.createElement("th");
    th3.textContent = "Age";
    let th4 = document.createElement("th");
    th4.textContent = "Curently Team";
    let th5 = document.createElement("th");
    th5.textContent = "Expierense (Years)";

    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    head.append(th5);
    table.append(head);

    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);

      for (let j in array[i]) {
        let td = document.createElement("td");

        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute(
          "style",
          "padding: 5px 15px; font-size: 15px; ; text-align: center"
        );
      }
    }

    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "black");
    table.setAttribute("width", "50%");
    table.setAttribute("style", "margin: auto; background-color: yellow; ");
  }
}

let tableOfEmp = new EmpTable(arrOfEmp);
tableOfEmp.getHtml();
