import { Request, Response } from "express"
import { FilmesUseCase } from "./FilmesUseCase"

export class FilmesController {
  async handle(request?: Request, response?: Response) {
    const filmesUseCase = new FilmesUseCase()
    const listFilmes = await filmesUseCase.execute()
    return response.json(listFilmes)
  }
  async newFilmes(request?: Request, response?: Response) {
    const filmesUseCase = new FilmesUseCase()
    const listFilmes = await filmesUseCase.newFilmes()  
    return response.json(listFilmes)
  }
}
