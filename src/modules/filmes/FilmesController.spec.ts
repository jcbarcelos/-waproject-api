import { filmesRouter } from '@routes/index';
import { FilmesController } from './FilmesController';
import express from 'express';
import request from 'supertest';

describe('Test FilmsController', () => {
  const app = express();
  app.use('/', filmesRouter);

  test('responds to get /filmes', async () => {
    await request(app).get('/filmes')
      .set('Accept', 'application/json')
      .expect(function (res) {
        res.body.title = 'Arrietty'
      })
  });
  test('responds to post /filmes', async () => {
    const res = await request(app).post('/filmes')
    expect(res.header['content-type']).toBe('application/json; charset=utf-8')
    expect(res.statusCode).toBe(200);
   });
});