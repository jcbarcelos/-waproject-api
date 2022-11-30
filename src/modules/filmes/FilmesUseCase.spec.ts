import { FilmesUseCase } from './FilmesUseCase';
jest.mock('node-fetch');

describe('Test FilmesUseCase', () => {

  test('should to have 22 expected 50', async () => {
    const filmeUseCase = new FilmesUseCase();
    const resultFilmesJest = await filmeUseCase.execute()
    expect(resultFilmesJest.length).toBe(22);
  });

   test('should if exists to have false expected false', async () => {
    const filmeUseCase = new FilmesUseCase();
    const resultFilmesJest = await filmeUseCase.newFilmes()
    expect(resultFilmesJest.length).toBe(22)
  });


});