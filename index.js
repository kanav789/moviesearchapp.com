{
  const search = document.querySelector("#search");
  const container2 = document.querySelector(".container2");
  const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  async function getmovis(url) {
    let raw = await fetch(url);
    let data = await raw.json();
    console.log(data.results);
    showmovie(data);
  }

  const showmovie = (data) => {
    container2.innerHTML = "";
    data.results.forEach((item) => {
      const box = document.createElement("div");
      box.classList.add("box");
      box.innerHTML = `  <img src="${IMGPATH + item.poster_path}" alt="" />;
      <div id="title">Title:${item.title}</div>
      <div id="IMBD">IMBD RATING:${item.vote_average}</div>
      <div id="language">Available in:${item.original_language}</>

      <div id="Overview">Overview:${item.overview}</div>
      
      `;

      container2.appendChild(box);
    });

    search.addEventListener("keyup", function (event) {
      if (event.target.value != "") {
        getmovis(SEARCHAPI + event.target.value);
        console.log(SEARCHAPI + event.target.value);
      } else {
        getmovis(api);
      }
    });
  };
  getmovis(api);
}
