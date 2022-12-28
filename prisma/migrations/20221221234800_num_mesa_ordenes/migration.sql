/*
  Warnings:

  - Added the required column `numMesa` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` ADD COLUMN `numMesa` VARCHAR(191) NOT NULL;
