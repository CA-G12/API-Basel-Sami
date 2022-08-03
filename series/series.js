

//title/rank/episodes/duration/background/img/year/url/trailer/category




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

