import { prisma } from "../../database/prismaDatabase";
import Api from '../../utils/api';

export class FilmesUseCase {
  async execute() {
    /* lista de filmes  */
    const listResults = await prisma.filmes.findMany({
      orderBy: {
        title: 'asc'
      }
    })
    return listResults;
  }
  async newFilmes() {
    const apiFilmes = new Api;
    const apiFilmesList = await apiFilmes.execute()
    let listFilmes = [];
    apiFilmesList?.json()?.then((res) => listFilmes.push(res));

    const listResults = await prisma.filmes.findMany()

    const filmes = await listResults;

    for (let index = 0; index <= listFilmes.length; index++) {

      const filmesExists = await prisma.filmes.findFirst({
        where: {
          id: {
            equals: filmes[index]?.id,
            mode: "insensitive",
          },
        },
      })

      if (!filmesExists) {
        await prisma.filmes.create({
          data: {
            title: filmes[index]?.title,
            description: filmes[index]?.description,
            director: filmes[index]?.director,
            producer: filmes[index]?.producer,
            movie_banner: filmes[index]?.movie_banner,
          },
        });
      }

      if (filmesExists) {
        await prisma.filmes.updateMany({
          where: {
            id: filmes[index]?.id
          },
          data: {
            title: filmes[index]?.title,
            description: filmes[index]?.description,
            director: filmes[index]?.director,
            producer: filmes[index]?.producer,
            movie_banner: filmes[index]?.movie_banner,
          },
        })
      }
    }
    return filmes
  }
}
