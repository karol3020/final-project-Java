// API : http://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a
// API 2 https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast
// http://img.omdbapi.com/?apikey=bf1ef21a&

async function main() {
    const films = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast") 
    const filmsData = await films.json();
    const filmsListEl = document.querySelector(".film-list")
    console.log(filmsData)
    filmsListEl.innerHTML = filmsData.Search.map((films) => filmsHTML(films)).join("");
    // let filmsslice = filmsData.slice(0,6)
    // console.log(filmsslice)
};

main();

function filmsHTML(films) {
    return `<div class="film-card">
    <div class="film-card__container">
        <h3 class="film__title">${films.Title}</h3>
        <p><b class="font">Year:</b> ${films.Year}</p>
        <p><b class="font">Type:</b> ${films.Type}</p>
        <p><b class="font"></b><img src="${films.Poster}" class= "img__scale"></p>
    </div>
</div>`
}

// async function renderFilms() {
//     const films = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast") 
//     const filmsData = await films.json();
//     const filmsListEl = document.querySelector(".film-list")
//     filmsListEl.innerHTML = filmsData.Search.map((films) => filmsHTML(films)).join("");

//     const filmsWrapper = document.querySelector('.film__wrapper')
//     filmsWrapper.innerHTML = `<div class="film">
//      <div class="film-card">
//      <div class="film-card__container">
//      <h3 class="film__title">${films.Title}</h3>
//         <p><b class="font">Year:</b> ${films.Year}</p>
//         <p><b class="font">Type:</b> ${films.Type}</p>
//         <p><b class="font"></b><img src="${films.Poster}" class= "img__scale"></p>
//      </div>
//      </div>
//      </div>`
// }

// renderFilms()

function searchFilm() {
    const loadFilmWrapper = document.querySelector('.film__wrapper')
    const hideImg = document.querySelector('.img')
    loading.classList += " .film__wrapper--loaded"
    setTimeout(() => {
        console.log('itworked')
    },1000)
}

searchFilm()