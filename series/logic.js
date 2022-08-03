let getGenres = (obj) => {
  let genres = [];
  if (obj.genres) {
    obj.genres.forEach((gen) => {
      genres.push(gen.name);
    });
  }
  return genres;
};

let generateSeriesObj = (data) => {
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
};
