const renderer = new Renderer
const moviesManager = new MoviesManager


const loadSavedMovies = async function () {
 const data = await moviesManager.getDataFromDB()
    renderer.render(data)
}


const getData = async function () {
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
  $(this).prop('disabled', true)
}


$('.button-main').one('click', getData)
$('.second-button').one('click', loadSavedMovies)
$('body').on('click', '.save-movie', saveMovie)
$('body').on('click', '.delete-movie', deleteMovie)











