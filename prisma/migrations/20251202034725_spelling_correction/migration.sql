/*
  Warnings:

  - The values [In_prograss] on the enum `Issue_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `issue` MODIFY `status` ENUM('open', 'In_progress', 'closed') NOT NULL DEFAULT 'open';
