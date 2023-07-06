/*
  Warnings:

  - Made the column `pedido` on table `orden` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `orden` MODIFY `pedido` JSON NOT NULL;
