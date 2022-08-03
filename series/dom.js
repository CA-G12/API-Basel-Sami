let menuIcon = document.querySelector(`.fa-bars`);

menuIcon.addEventListener(`click`, () => {
  let ul = document.querySelector(`header nav ul`);
  ul.style.left = 0;
  ul.addEventListener(`click`, () => {
    ul.style.left = `-100rem`;
  })
})







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
 // console.log(data)
  renderContainer(data);
});

let renderContainer = (data) => {
  data.forEach((ele) => {
    renderNode(ele);
    //console.log(ele)
  });
};

let renderNode = (node) => {
 /* const card= document.createElement()
  card.classList.add()
  */
  //return card
 // console.log(node);
};


