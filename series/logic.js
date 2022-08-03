fetch("https://api.jikan.moe/v4/anime", (data) => {
  data = generateSeriesObj(data.data);
  renderCard(data)
  
});
function getGenres(obj) {
  let genres = [];
  if (obj.genres) {
    obj.genres.forEach((gen) => {
      genres.push(gen.name);
    });
  }
  return genres;
}

function generateSeriesObj(data) {
  let newObj = [];
  for (let obj of data) {
    newObj.push({
      title: obj.title,
      duration: obj.duration,
      img: obj.images.jpg,
      year: obj.year,
      rank: obj.rank,
      episodsNo: obj.episodes,
      genres: getGenres(obj),
      trailer: obj.trailer.url,
      detailesURL: obj.url,
      id: obj.mal_id,
    });
  }
  return newObj;
}

function renderCard(data) {
  console.log(data);
}

function getTitle() {}

function getDuration() {}

function getBckground() {}

function getYear() {}
function getRank() {}

function getEpisodesNo() {}

function getTrailer() {}

function detailesURL() {}
