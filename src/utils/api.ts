import fetch from "cross-fetch"

 class Api {
  async execute() {
   
    return  await fetch("https://ghibliapi.herokuapp.com/films?fields=title,description,director,producer,movie_banner", {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}

export default Api