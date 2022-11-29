import { FilmesController } from '../../modules/filmes/FilmesController'
import { routes } from '../routes'
const filmesRouter = routes
const filmesController = new FilmesController()
filmesRouter.get('/filmes', filmesController.handle)
filmesRouter.post('/filmes', filmesController.newFilmes)
export { filmesRouter }
