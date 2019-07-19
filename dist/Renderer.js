class Renderer {

   async render(data) {
    for(let i=0; i<data.length; i++){
    $('.containers').append(`<div class="wrapper">
    <div class="main_card">
      <div class="card_left">
        <div class="card_datails">
          <h1 class="movie-name">${data[i].name}</h1>
          <div class="card_cat">
            <p class="PG">PG - 13</p>
            <p class="year">${data[i].release}</p>
            <p class="genre"></p>
            <p class="time"></p>
          </div>
          <p class="disc">${data[i].overview}</p>
        <div class="social-btn">
          <!-- WATCH TRAILER-->
          <button class="fas fa-play delete-movie"> מחק</button>
       
          <button class="fas fa-download save-movie"> שמור </button>
         
          <button>
            <i class="fas fa-thumbs-up"></i> ${data[i].vote}
          </button>
          <!--BOOKMARK-->
          <button>
            <i class="fas fa-star"></i>
          </button>
        </div>	
        </div>
      </div>
      <div class="card_right">
        <div class="img_container">
          <img src="https://image.tmdb.org/t/p/w500${data[i].picture}" alt="">
          </div>
          <div class="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i class="fas fa-play-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>`)

    }
     }
     
    }