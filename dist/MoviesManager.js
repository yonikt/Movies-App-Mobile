class MoviesManager {
    constructor(cityData) {
        this.movieData = []
    }


    // async getDataFromDB() {
    //     let self = this.cityData
    //     let res = await $.get('/cities')
    //     if (res) {
    //         for (let i=0; i<res.length; i++) {
    //             self.push(res[i])
    //         }
    //     }
    //     return
    // }

    async getMoviesData() {
        let x = await $.get(`/movies`)
        this.movieData.push(x)
        console.log(this.movieData[0])
        return this.movieData[0]
     
    }




    async saveMovie(movieName) {
        let data = await this.movieData[0]
        data=data.filter(i => i.name === movieName)

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
        let data = await this.movieData[0]
        data=data.filter(i => i.name != movieName)
    }

   
}


