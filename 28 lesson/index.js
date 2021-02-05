// // 1. Создать страницу, которая выводит нумерованный список песен:

var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

const songList = document.createElement("ol");
const mainDiv = document.getElementById("playlist");
mainDiv.setAttribute("class", "");
mainDiv.append(songList);

for (i in playList) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.append(playList[i].author);
  p.append(" : ");
  p.append(playList[i].song);
  li.append(p);
  songList.append(li);
}

// // Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается.
// // При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

const btn = document.createElement("button");
const p = document.createElement("p");
const modal = document.getElementById("modal");
p.textContent = "Открыть";
btn.append(p);
modal.append(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = "Тебя сюда не звали, закрой это";
  div.append(p);
  const innerBtn = document.createElement("button");
  const innerBtnP = document.createElement("p");
  innerBtnP.textContent = "Закрыть";
  innerBtn.append(innerBtnP);
  div.append(innerBtn);
  modal.append(div);
  btn.disabled = true;
  btn.style.display = "none";
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
    btn.style.display = "block";
  });
});

// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

trafficLightSwitch.addEventListener("click", () => {
  if (red.classList.contains("red")) {
    red.classList.remove("red");
    yellow.classList.add("yellow");
  } else if (yellow.classList.contains("yellow")) {
    yellow.classList.remove("yellow");
    green.classList.add("green");
  } else if (green.classList.contains("green")) {
    green.classList.remove("green");
    red.classList.add("red");
  }
});
