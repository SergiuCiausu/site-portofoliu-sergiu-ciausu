-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "case_smart";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "make-me-fit";

-- CreateEnum
CREATE TYPE "case_smart"."Brand" AS ENUM ('LIVOLO', 'LUXION', 'OWON', 'SONOFF', 'TELLUR');

-- CreateEnum
CREATE TYPE "case_smart"."Culori" AS ENUM ('ROSU', 'ALB', 'NEGRU', 'GALBEN', 'ROZ', 'VERDE', 'ALBASTRU');

-- CreateEnum
CREATE TYPE "make-me-fit"."Locatie" AS ENUM ('ORIUNDE', 'IN_SALA');

-- CreateEnum
CREATE TYPE "make-me-fit"."Dificultate" AS ENUM ('INCEPATOR', 'MEDIU', 'AVANSAT');

-- CreateEnum
CREATE TYPE "make-me-fit"."GrupeMuschi" AS ENUM ('ABDOMEN', 'FESIERI', 'COAPSE', 'PIEPT', 'BRATE', 'UMERI', 'SPATE');

-- CreateTable
CREATE TABLE "case_smart"."Produs" (
    "id" SERIAL NOT NULL,
    "cod_produs" INTEGER NOT NULL,
    "grup_produs" INTEGER NOT NULL DEFAULT 123,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalRecenzii" INTEGER NOT NULL,
    "pret" INTEGER NOT NULL,
    "reducere" INTEGER,
    "descriere_produs" TEXT NOT NULL,
    "descriere" TEXT NOT NULL,
    "specificatii" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "denumire_produs" TEXT NOT NULL,
    "brand" "case_smart"."Brand" NOT NULL DEFAULT 'LIVOLO',
    "culoare" "case_smart"."Culori" NOT NULL DEFAULT 'ROSU',
    "url" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Produs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."Recenzie" (
    "id" SERIAL NOT NULL,
    "produsId" INTEGER NOT NULL,
    "nume" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comentariu" TEXT NOT NULL,

    CONSTRAINT "Recenzie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."IntrerupatoareTouch" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "IntrerupatoareTouch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."PrizeRamaSticla" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "PrizeRamaSticla_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."IntrerupatorPriza" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "IntrerupatorPriza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."PrizaMedia" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "PrizaMedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."Telecomanda" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "Telecomanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."SmartHome" (
    "id" SERIAL NOT NULL,
    "codProdus" INTEGER NOT NULL,

    CONSTRAINT "SmartHome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."Categorii" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,

    CONSTRAINT "Categorii_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_smart"."ImaginiProdus" (
    "id" SERIAL NOT NULL,
    "grup_produs" INTEGER NOT NULL DEFAULT 123,
    "img1ROSU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROSU.png',
    "img2ROSU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROSU.png',
    "img3ROSU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROSU.png',
    "img4ROSU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROSU.png',
    "img5ROSU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROSU.png',
    "img1NEGRU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-NEGRU.png',
    "img2NEGRU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-NEGRU.png',
    "img3NEGRU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-NEGRU.png',
    "img4NEGRU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-NEGRU.png',
    "img5NEGRU" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-NEGRU.png',
    "img1GALBEN" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-GALBEN.png',
    "img2GALBEN" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-GALBEN.png',
    "img3GALBEN" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-GALBEN.png',
    "img4GALBEN" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-GALBEN.png',
    "img5GALBEN" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-GALBEN.png',
    "img1VERDE" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-VERDE.png',
    "img2VERDE" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-VERDE.png',
    "img3VERDE" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-VERDE.png',
    "img4VERDE" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-VERDE.png',
    "img5VERDE" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-VERDE.png',
    "img1ROZ" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROZ.png',
    "img2ROZ" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROZ.png',
    "img3ROZ" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROZ.png',
    "img4ROZ" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROZ.png',
    "img5ROZ" TEXT NOT NULL DEFAULT '/intrerupator-simplu-livolo-cu-touch-ROZ.png',
    "img1ALBASTRU" TEXT NOT NULL DEFAULT '',
    "img2ALBASTRU" TEXT NOT NULL DEFAULT '',
    "img3ALBASTRU" TEXT NOT NULL DEFAULT '',
    "img4ALBASTRU" TEXT NOT NULL DEFAULT '',
    "img5ALBASTRU" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "ImaginiProdus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Program" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "heroP" TEXT NOT NULL,
    "img" VARCHAR(255) NOT NULL DEFAULT '',
    "textBtn" VARCHAR(255) NOT NULL,
    "previewClip" VARCHAR(255) NOT NULL,
    "pret" INTEGER NOT NULL,
    "descriere" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Testimonial" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "nume" TEXT NOT NULL,
    "varsta" INTEGER NOT NULL,
    "poza" VARCHAR(255) NOT NULL,
    "descriere" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Reteta" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "poza" VARCHAR(255) NOT NULL,
    "timpPreparare" INTEGER NOT NULL,

    CONSTRAINT "Reteta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ProgramReteta" (
    "programId" INTEGER NOT NULL,
    "retetaId" INTEGER NOT NULL,

    CONSTRAINT "ProgramReteta_pkey" PRIMARY KEY ("programId","retetaId")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Ingredient" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "retetaId" INTEGER,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."RetetaIngredient" (
    "id" SERIAL NOT NULL,
    "retetaId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "cantitate" VARCHAR(255) NOT NULL,

    CONSTRAINT "RetetaIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Exercitiu" (
    "id" SERIAL NOT NULL,
    "nume" VARCHAR(255) NOT NULL,
    "descriere" TEXT,
    "explicatie" TEXT,
    "poza" VARCHAR(255) NOT NULL,
    "locatie" "make-me-fit"."Locatie"[],
    "dificultate" "make-me-fit"."Dificultate"[],
    "durata" INTEGER NOT NULL,
    "muschi" "make-me-fit"."GrupeMuschi"[],
    "programId" INTEGER NOT NULL,

    CONSTRAINT "Exercitiu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ProgramExercitiu" (
    "programId" INTEGER NOT NULL,
    "exercitiuId" INTEGER NOT NULL,

    CONSTRAINT "ProgramExercitiu_pkey" PRIMARY KEY ("programId","exercitiuId")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ExercitiuProgresie" (
    "exercitiuId" INTEGER NOT NULL,
    "progresieId" INTEGER NOT NULL,

    CONSTRAINT "ExercitiuProgresie_pkey" PRIMARY KEY ("exercitiuId","progresieId")
);

-- CreateTable
CREATE TABLE "make-me-fit"."Progresie" (
    "id" SERIAL NOT NULL,
    "nume" VARCHAR(255) NOT NULL,
    "descriere" TEXT,
    "explicatie" TEXT,
    "poza" VARCHAR(255) NOT NULL,
    "exercitiuId" INTEGER NOT NULL,
    "programId" INTEGER,

    CONSTRAINT "Progresie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ProgramProgresie" (
    "programId" INTEGER NOT NULL,
    "progresieId" INTEGER NOT NULL,

    CONSTRAINT "ProgramProgresie_pkey" PRIMARY KEY ("programId","progresieId")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ControlGreutate" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "nume" VARCHAR(255) NOT NULL,

    CONSTRAINT "ControlGreutate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "make-me-fit"."ProgramControlGreutate" (
    "programId" INTEGER NOT NULL,
    "controlGreutateId" INTEGER NOT NULL,

    CONSTRAINT "ProgramControlGreutate_pkey" PRIMARY KEY ("programId","controlGreutateId")
);

-- CreateTable
CREATE TABLE "make-me-fit"."_ProgramReteta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProgramReteta_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produs_cod_produs_key" ON "case_smart"."Produs"("cod_produs");

-- CreateIndex
CREATE UNIQUE INDEX "Program_nume_key" ON "make-me-fit"."Program"("nume");

-- CreateIndex
CREATE INDEX "_ProgramReteta_B_index" ON "make-me-fit"."_ProgramReteta"("B");

-- AddForeignKey
ALTER TABLE "case_smart"."Recenzie" ADD CONSTRAINT "Recenzie_produsId_fkey" FOREIGN KEY ("produsId") REFERENCES "case_smart"."Produs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."IntrerupatoareTouch" ADD CONSTRAINT "IntrerupatoareTouch_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."PrizeRamaSticla" ADD CONSTRAINT "PrizeRamaSticla_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."IntrerupatorPriza" ADD CONSTRAINT "IntrerupatorPriza_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."PrizaMedia" ADD CONSTRAINT "PrizaMedia_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."Telecomanda" ADD CONSTRAINT "Telecomanda_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "case_smart"."SmartHome" ADD CONSTRAINT "SmartHome_codProdus_fkey" FOREIGN KEY ("codProdus") REFERENCES "case_smart"."Produs"("cod_produs") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."Testimonial" ADD CONSTRAINT "Testimonial_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramReteta" ADD CONSTRAINT "ProgramReteta_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramReteta" ADD CONSTRAINT "ProgramReteta_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "make-me-fit"."Reteta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."Ingredient" ADD CONSTRAINT "Ingredient_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "make-me-fit"."Reteta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."RetetaIngredient" ADD CONSTRAINT "RetetaIngredient_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "make-me-fit"."Reteta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."RetetaIngredient" ADD CONSTRAINT "RetetaIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "make-me-fit"."Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."Exercitiu" ADD CONSTRAINT "Exercitiu_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramExercitiu" ADD CONSTRAINT "ProgramExercitiu_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramExercitiu" ADD CONSTRAINT "ProgramExercitiu_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "make-me-fit"."Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ExercitiuProgresie" ADD CONSTRAINT "ExercitiuProgresie_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "make-me-fit"."Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ExercitiuProgresie" ADD CONSTRAINT "ExercitiuProgresie_progresieId_fkey" FOREIGN KEY ("progresieId") REFERENCES "make-me-fit"."Progresie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."Progresie" ADD CONSTRAINT "Progresie_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "make-me-fit"."Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."Progresie" ADD CONSTRAINT "Progresie_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramProgresie" ADD CONSTRAINT "ProgramProgresie_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramProgresie" ADD CONSTRAINT "ProgramProgresie_progresieId_fkey" FOREIGN KEY ("progresieId") REFERENCES "make-me-fit"."Progresie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ControlGreutate" ADD CONSTRAINT "ControlGreutate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramControlGreutate" ADD CONSTRAINT "ProgramControlGreutate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "make-me-fit"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."ProgramControlGreutate" ADD CONSTRAINT "ProgramControlGreutate_controlGreutateId_fkey" FOREIGN KEY ("controlGreutateId") REFERENCES "make-me-fit"."ControlGreutate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."_ProgramReteta" ADD CONSTRAINT "_ProgramReteta_A_fkey" FOREIGN KEY ("A") REFERENCES "make-me-fit"."Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "make-me-fit"."_ProgramReteta" ADD CONSTRAINT "_ProgramReteta_B_fkey" FOREIGN KEY ("B") REFERENCES "make-me-fit"."Reteta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
