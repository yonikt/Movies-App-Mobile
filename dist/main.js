const renderer = new Renderer
const moviesManager = new MoviesManager


const loadSavedMovies = async function () {
  $("#containers").empty()
 const data = await moviesManager.getSavedMovies()
    renderer.render(data)
}


const getData = async function () {
  $("#containers").empty()
  const data = await moviesManager.getMoviesData()
  renderer.render(data)

}

const saveMovie = async function () {
  const save = $(this).closest('.card').find('.movie-name').text()
  await moviesManager.saveMovie(save)
  $(this).prop('disabled', true)
}


const deleteMovie = async function () {
  const save = $(this).closest('.card').find('.movie-name').text()
  await moviesManager.removeMovie(save)
  $(this).closest('.card').remove()
}


$('.button-main').one('click', getData)
$('.second-button').one('click', loadSavedMovies)
$('body').on('click', '.save-movie', saveMovie)
$('body').on('click', '.delete-movie', deleteMovie)











