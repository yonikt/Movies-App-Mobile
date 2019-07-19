const renderer = new Renderer
const moviesManager = new MoviesManager


const getData = async function () {
    const data = await moviesManager.getMoviesData()
    renderer.render(data)
    
}

const saveMovie= async function(){
   const save =  $(this).closest('.wrapper').find('.movie-name').text()
 await moviesManager.saveMovie(save)
 $(this).prop('disabled', true) 
}


const deleteMovie= async function(){
   const save =  $(this).closest('.wrapper').find('.movie-name').text()
 await moviesManager.removeMovie(save)
 $(this).closest('.wrapper').remove()
   $(this).prop('disabled', true)
}




$('.button').one('click', getData)
$('body').on('click', '.save-movie', saveMovie)
$('body').on('click', '.delete-movie', deleteMovie)


// async function loadPage() {
//    await tempManager.getDataFromDB()
//    for(let i=0; i<tempManager.cityData.length; i++){
//    renderer.renderData(tempManager.cityData[i])
//    }
// }





// const saveData= async function(){
//    let cityName = $(this).parent().find('.name').text()
//   await tempManager.saveCity(cityName)
//   $(this).prop('disabled', true)
  
// }

// const deleteData= async function(){
//    let cityName = $(this).parent().find('.name').text()
//   tempManager.removeCity(cityName)
//   await tempManager.getDataFromDB()
//    $(this).parent().remove()
//    $(this).prop('disabled', true)
// }




// $('#search').on('click', getData)
// $('body').on('click', '#save', saveData) 
// $('body').on('click', '#delete', deleteData)

// loadPage()





