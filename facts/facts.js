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

let url = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
fetch(url, (data) => {
  data = generateFactsObj(data.data);
  // console.log(data)
  let facts = addFacts(data);
  console.log(facts);
  renderContainer(facts);
});

let addFacts = (series) => {
  let newSeriesArr = [];
  console.log("test", series);

  for (let index = 0; index < series.length; index++) {
    newSeriesArr[index] = { ...series[index], facts: "sami" };
  }
  console.log("test2", newSeriesArr);

  series.forEach((se) => {
    fetch(url + se.name, (data) => {
      newSeriesArr.push({ ...se, facts: data.data });
    });
  });
  console.log("test3",newSeriesArr);
  // console.log(newSeriesArr)
  return newSeriesArr;
};

let generateFactsObj = (data) => {
  if (!data) {
    return "No data given !!";
  }
  if (!data.length) {
    return "The array is empty !!";
  }

  let newObj = [];
  let id = -1;

  for (let obj of data) {
    newObj.push({
      id: id++,
      name: obj.anime_name,

      img: obj.anime_img,

      id: obj.anime_id,
    });
  }
  return newObj;
};
