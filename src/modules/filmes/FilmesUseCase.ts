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

    // const listResults = await prisma.filmes.findMany()
    const myFilmesList = await listFilmes
   

    for (let index = 0; index <= myFilmesList.length; index++) {

      const filmesExists = await prisma.filmes.findFirst({
        where: {
          id: {
            equals: myFilmesList[index]?.id,
            mode: "insensitive",
          },
        },
      })

      if (!filmesExists) {
        await prisma.filmes.create({
          data: {
            title: myFilmesList[index]?.title,
            description: myFilmesList[index]?.description,
            director: myFilmesList[index]?.director,
            producer: myFilmesList[index]?.producer,
            movie_banner: myFilmesList[index]?.movie_banner,
          },
        });
      }

      if (filmesExists) {
        await prisma.filmes.updateMany({
          where: {
            id: myFilmesList[index]?.id
          },
          data: {
            title: myFilmesList[index]?.title,
            description: myFilmesList[index]?.description,
            director: myFilmesList[index]?.director,
            producer: myFilmesList[index]?.producer,
            movie_banner: myFilmesList[index]?.movie_banner,
          },
        })
      }
    }
    return myFilmesList
  }
}
