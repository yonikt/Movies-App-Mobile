class Renderer {

  async renderAll(data) {
    for (let i = 0; i < data.length; i++) {
      $('#containers').append(`<div class="card">
      <div class="poster"><img src = "https://image.tmdb.org/t/p/w500${data[i].picture}"></div>
      <div class="details"> <h2 class="movie-name">${data[i].name}</span></h2> <div class="tags">
          <span class="fantasy">דירוג צופים: ${data[i].vote}</span>
          <span class="scifi">יצא לאקרנים: ${data[i].release.slice(0,10)}</span> <br>
          <button class="save-movie">שמור</button> 
        <div class="info"> <p>${data[i].overview}</p> </div>`)
    }
  }

  async renderSaved(data) {
    for (let i = 0; i < data.length; i++) {
      $('#containers').append(`<div class="card">
      <div class="poster"><img src = "https://image.tmdb.org/t/p/w500${data[i].picture}"></div>
      <div class="details"> <h2 class="movie-name">${data[i].name}</span></h2> <div class="tags">
          <span class="fantasy">דירוג צופים: ${data[i].vote}</span>
          <span class="scifi">יצא לאקרנים: ${data[i].release.slice(0,10)}</span> <br>
            <button class="delete-movie">מחק</button> </div>
        <div class="info"> <p>${data[i].overview}</p> </div>`)
    }
  }

}

// main button effect 

const body = document.body;
const btn = document.querySelectorAll('.button')[0];
btn.addEventListener('mouseenter', () => {
	body.classList.add('show')
})
btn.addEventListener('mouseover', () => {
	body.classList.remove('show')
})

