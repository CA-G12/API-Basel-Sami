let getGenres = (obj) => {
  if (!obj) {
    return "The object is undefined or null !!";
  }
  if (Object.keys(obj).length === 0) {
    return "The series is not categorized .";
  }
  let genres = [];
  if (obj.genres) {
    obj.genres.forEach((gen) => {
      genres.push(gen.name);
    });
  }

  return genres;
};

let generateSeriesObj = (data) => {

  if (!data) {
    return "No data given !!";
  }
  if(!data.length){
    return "The array is empty !!";
  }

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

module.exports = { getGenres, generateSeriesObj };
