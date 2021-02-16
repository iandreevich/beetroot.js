const getFilms = async () => {
  let base_url = "http://www.omdbapi.com/?apikey=57ad683b";
  let input = document.getElementById("myInput").value;
  let type = document.getElementById("type").value;

  const url = type
    ? base_url + "&s=" + input + "&type=" + type
    : base_url + "&s=" + input;

  const response = await fetch(url).then((res) => res.json());
  const pages = Math.ceil(response.totalResults / 10);

  removeButtons(100);
  renderPagination(pages);
  renderFilms(response.Search);
};

const removeButtons = (pages) => {
  for (let i = 1; i <= pages; i++) {
    const paginationButton = document.getElementById("pagination");
    paginationButton ? paginationButton.remove() : null;
  }
};

const renderPagination = (pages) => {
  for (let i = 0; i < pages; i++) {
    const pagi = document.getElementById("pagi");
    const pagButton = document.createElement("button");
    pagButton.innerHTML = i + 1;
    pagButton.addEventListener("click", () => onPageChange(i + 1));
    pagButton.setAttribute("id", "pagination");
    pagi.appendChild(pagButton);
  }
};

const onPageChange = async (page) => {
  let type = document.getElementById("type").value;
  let input = document.getElementById("myInput").value;
  let url = `http://www.omdbapi.com/?apikey=57ad683b&s=${input}&type=${type}&page=${page}`;
  const response = await fetch(url).then((res) => res.json());

  renderFilms(response.Search);
};

const renderFilms = (films) => {
  let listOfFilms = document.getElementById("myUL");
  showDetail();

  while (listOfFilms.firstChild) {
    listOfFilms.removeChild(listOfFilms.firstChild);
  }

  if (!films) {
    alert("Movie not found");
  } else {
    for (let i = 0; i < films.length; i++) {
      let item = document.createElement("li");
      item.className = "item";
      let button = document.createElement("button");
      let div = document.createElement("div");
      div.className = "film__item";
      div.append(item, button);
      button.textContent = "Details";
      item.innerHTML = films[i].Title + " " + films[i].Year + " ";
      button.addEventListener("click", () => getInfo(films[i].imdbID));

      listOfFilms.append(div);
    }
  }
};

const getInfo = async (id) => {
  let urlInfo = `http://www.omdbapi.com/?apikey=57ad683b&i=${id}`;
  const detail = await fetch(urlInfo).then((res) => res.json());

  showDetail(detail);
};

const showDetail = (detail) => {
  let detailsFilm = document.getElementById("details");

  if (detail) {
    detailsFilm.innerText = `Film Tittle: ${detail.Title}, 
Year:  ${detail.Year}
Country: ${detail.Country}
Director: ${detail.Director}
Actors: ${detail.Actors}
Box Office: ${detail.BoxOffice}`;
  } else return (detailsFilm.innerText = "");
};
