// Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

const div = document.getElementById("myDiv");
const textarea = document.getElementById("myTextarea");

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.code == "KeyE") {
    e.preventDefault();
    div.style.display = "none";
    textarea.style.display = "block";
    textarea.value = div.innerText;
  }
});

document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey && e.code == "NumpadAdd") ||
    (e.ctrlKey && e.code == "Equal")
  ) {
    e.preventDefault();
    div.style.display = "block";
    textarea.style.display = "none";
    div.innerText = textarea.value;
  }
});

// Создать HTML-страницу с блоком текста в рамочке. // Реализовать возможность
// изменять размер блока, // если зажать мышку в правом нижнем углу и тянуть ее
// дальше.

const resDiv = document.getElementById("content__textarea");
const resizer = document.querySelector("div.content__textarea--resizer");

const initResize = (e) => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

const startResize = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
};
const stopResize = (e) => {
  window.removeEventListener("mousemove", startResize);
  window.removeEventListener("mouseup", stopResize);
};

resizer.addEventListener("mousedown", initResize);
