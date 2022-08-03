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
  console.log(data);
  renderContainer(data);
});

let renderContainer = (data) => {
  const container = document.getElementById("container");
  data.forEach((ele) => {
    container.append(renderNode(ele));
    //console.log(ele)
  });
};

let renderNode = (node) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const face_front = document.createElement("div");
  const title = document.createElement("h2");
  const p = document.createElement("p");
  face_front.append(title);
  face_front.append(p);
  card.append(face_front);

  const face_back = document.createElement("div");
  card.append(face_back);

  return card;
  // console.log(node);
};

/* <div class="card">
          <div class="face front">
            <h2>Cowboy Bebop</h2>
            <p>action.</p>
          </div>
          <div class="face back">
            <h2>Cowboy Bebop</h2>
            <p>action.</p>
            <a href="#">Watch trailer</a>
          </div>
        </div>*/
