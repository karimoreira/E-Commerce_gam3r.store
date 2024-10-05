-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "videoReview" TEXT NOT NULL,
    "tags" TEXT[],
    "precoBase" DOUBLE PRECISION NOT NULL,
    "precoPromocional" DOUBLE PRECISION NOT NULL,
    "menorPreco" DOUBLE PRECISION NOT NULL,
    "maiorPreco" DOUBLE PRECISION NOT NULL,
    "precoMedio" DOUBLE PRECISION NOT NULL,
    "especificacoes" JSONB NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
