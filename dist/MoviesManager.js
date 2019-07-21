class MoviesManager {
    constructor(cityData) {
        this.movieData = []
        this.savedMovies = []
    }


    async getDataFromDB() {
        let res = await $.get('/save')
        for (let i = 0; i < res.length; i++) {
            this.savedMovies.push(res[i])
        }
        console.log(this.savedMovies)
        return this.savedMovies
    }


    async getMoviesData() {
        let x = await $.get(`/movies`)
        this.movieData.push(x)
        console.log(this.movieData[0])
        return this.movieData[0]
    }




    async saveMovie(movieName) {
        let data = await this.movieData[0]
        data = data.filter(i => i.name === movieName)

        await $.post('/save', data[0])
    }


    async removeMovie(movieName) {
        $.ajax({
            type: "DELETE",
            url: `/movies/${movieName}`,
            success: function () {
                console.log("deleted")
            }
        })
        let data1 = await this.movieData[0]
        data1 = data1.filter(i => i.name != movieName)
        let data2 = await this.savedMovies
        data2 = data2.filter(i => i.name != movieName)
    }


}
