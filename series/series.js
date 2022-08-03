

//title/rank/episodes/duration/background/img/year/url/trailer/
let menuIcon = document.querySelector(`.fa-bars`);

menuIcon.addEventListener(`click`, () => {
  let ul = document.querySelector(`header nav ul`);
  ul.style.left = 0;
  ul.addEventListener(`click`, () => {
    ul.style.left = `-100rem`;
  })
})

fetch = (url, callback) => {
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


fetch('https://api.jikan.moe/v4/anime', (data) => {
  console.log(data);
});
