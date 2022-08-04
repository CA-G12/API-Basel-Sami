let menuIcon = document.querySelector(`.fa-bars`);

menuIcon.addEventListener(`click`, () => {
  let ul = document.querySelector(`header nav ul`);
  ul.style.left = 0;
  ul.addEventListener(`click`, () => {
    ul.style.left = `-100rem`;
  });
});

let fetch = (url, callback) => {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);

      callback(data);
    }
  };
  xhr.open("GET", url);

  xhr.send();
};

fetch("https://api.jikan.moe/v4/anime", (data) => {
  data = generateSeriesObj(data.data);
  // console.log(data);
  renderContainer(data);
});

let renderContainer = (data) => {
  const container = document.querySelector(".container");
  data.forEach((ele) => {
    container.append(renderNode(ele));
    //console.log(ele)
  });
};

let renderNode = (node) => {
  console.log(node);
  const imgURL = node.img.image_url;
  const title=node.title;
  const detailesURL=node.detailesURL;
  const duration=node.duration;
  const episodsNo=node.episodsNo;
  const id=node.id;
  const genres=node.genres;
  const rank=node.rank;
  const trailer=node.trailer;
  const year=node.year;

  //render series card
  const card = document.createElement("div");
  card.classList.add("card");
  const face_front = document.createElement("div");
  face_front.classList.add("face");
  face_front.classList.add("front");
  card.style.backgroundImage = `url(${imgURL})`
  card.append(face_front);
  const face_back = document.createElement("div");
  face_back.classList.add("face");
  face_back.classList.add("back");
  const h1Back = document.createElement("h1");
  h1Back.textContent = title;
  const episodsNoBack = document.createElement(`p`)
  card.append(face_back);
  episodsNoBack.textContent = `Episode: ${episodsNo}`;
  const genreNoBack = document.createElement(`p`)
  genreNoBack.textContent = `${genres[0]}, ${genres[1]}`
  const yearNoBack = document.createElement(`p`)
  yearNoBack.textContent = `Year: ${year}`
  face_back.appendChild(h1Back)
  face_back.appendChild(genreNoBack)
  face_back.appendChild(episodsNoBack)
  face_back.appendChild(yearNoBack)

  let trailerbutton = document.createElement(`a`);
  trailerbutton.href = trailer;
  trailerbutton.textContent = `Trailer`;

  face_back.appendChild(trailerbutton)

  let detailsbutton = document.createElement(`a`);
  detailsbutton.href = detailesURL;
  detailsbutton.textContent = `Details`;

  face_back.appendChild(detailsbutton)
  return card;
  // console.log(node);
};


