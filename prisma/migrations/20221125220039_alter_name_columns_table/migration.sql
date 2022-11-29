/*
  Warnings:

  - You are about to drop the column `descricao` on the `filmes` table. All the data in the column will be lost.
  - You are about to drop the column `diretor` on the `filmes` table. All the data in the column will be lost.
  - You are about to drop the column `produtor` on the `filmes` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `filmes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `filmes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producer` to the `filmes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `filmes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "filmes_titulo_key";

-- AlterTable
ALTER TABLE "filmes" DROP COLUMN "descricao",
DROP COLUMN "diretor",
DROP COLUMN "produtor",
DROP COLUMN "titulo",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "producer" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "filmes_title_key" ON "filmes"("title");
