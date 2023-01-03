// API : http://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a
// API 2 https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast
// http://img.omdbapi.com/?apikey=bf1ef21a&

async function main() {
    const films = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast") 
    const filmsData = await films.json();
    const filmsListEl = document.querySelector(".film-list")
    console.log(filmsData)
    filmsListEl.innerHTML = filmsData.Search.map((films) => filmsHTML(films)).join("");
};

main();

function filmsHTML(films) {
    return `<div class="film-card">
    <div class="film-card__container">
        <h3 class="film__title">${films.Title}</h3>
        <p><b class="font">Year:</b>${films.Year}</p>
        <p><b class="font">Type:</b>${films.Type}</p>
        <p><b class="font">Img:</b>${films.Poster}</p>
    </div>
</div>`
}