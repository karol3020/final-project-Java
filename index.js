// API : http://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a
// API 2 https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast
// http://img.omdbapi.com/?apikey=bf1ef21a&

async function main(filter) {
    const films = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast") 
    const filmsData = await films.json();
    const filmsListEl = document.querySelector(".film-list")
    // console.log(filmsData)
    filmsListEl.innerHTML = filmsData.Search.map((films) => filmsHTML(films)).join("")

    if(filter === 'Newest'){
    filmsListEl.innerHTML.sort((a,b) => a.Year - b.Year)
    }
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

function filterFilms(event){
    main(event.target.value)
}

function searchFilm(event) {
    event.preventDefault();
    const remove = document.querySelector (' .fa-solid__remove')
    const loading = document.querySelector(' .spinner__show')
    remove.classList += " fa-solid--remove"
    loading.classList += " spinner__show--loading"

    setTimeout (() => {
        remove.classList.remove("fa-solid--remove")
        loading.classList.remove("spinner__show--loading")
        setTimeout(() => {
            const removeImg = document.querySelector (' .img')
            const showModal = document.querySelector (' .modal')

            removeImg.classList += " img__hide" 
            showModal.classList += " modal--show"
          
            removeImg.classList.add("img__hide")
            showModal.classList.add("modal__show")
            console.log('it worked')    
        },50)
    }, 2500)
}

// function sortFilms() {
//     const filmsWrapper = document.querySelector(".film-list")

//     const films = getFilms()
    
//     const filmHtml = films.map((film-list) => { return `<div class="film-list">
//     <div class="film">
//     <div class="film-card">
//         <div class="film-card__container">
//             <h3 class="title__film">Title</h3>
//             <p><b>Year:</b>${film-list.Year}</p>
//             <p><b>Type:</b>Type</p> 
//             <p><b></b>Poster</p>
//         </div>
// </div>
// </div>
// </div>`
//     })
//     .join("");
//     filmsWrapper.innerHTML = filmHtml
// }

// setTimeout(() => {
//     sortFilms()
// })

// // DATAAA

// async function getFilms() {
//     const films = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bf1ef21a&s=fast") 
//     const filmsData = await films.json();
//     const filmsListEl = document.querySelector(".film-list")
//     console.log(filmsData)
//     filmsListEl.innerHTML = filmsData.Search.map((films) => filmsHTML(films)).join("")
// }