/*
  Warnings:

  - You are about to drop the `_questiontags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `attempt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `useranswer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_questiontags` DROP FOREIGN KEY `_QuestionTags_A_fkey`;

-- DropForeignKey
ALTER TABLE `_questiontags` DROP FOREIGN KEY `_QuestionTags_B_fkey`;

-- DropForeignKey
ALTER TABLE `answer` DROP FOREIGN KEY `Answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `attempt` DROP FOREIGN KEY `Attempt_quizId_fkey`;

-- DropForeignKey
ALTER TABLE `attempt` DROP FOREIGN KEY `Attempt_userId_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_quizId_fkey`;

-- DropForeignKey
ALTER TABLE `question` DROP FOREIGN KEY `Question_testId_fkey`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `Quiz_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `quiz` DROP FOREIGN KEY `Quiz_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `test` DROP FOREIGN KEY `Test_creatorId_fkey`;

-- DropForeignKey
ALTER TABLE `useranswer` DROP FOREIGN KEY `UserAnswer_answerId_fkey`;

-- DropForeignKey
ALTER TABLE `useranswer` DROP FOREIGN KEY `UserAnswer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `useranswer` DROP FOREIGN KEY `UserAnswer_userId_fkey`;

-- DropTable
DROP TABLE `_questiontags`;

-- DropTable
DROP TABLE `answer`;

-- DropTable
DROP TABLE `attempt`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `question`;

-- DropTable
DROP TABLE `quiz`;

-- DropTable
DROP TABLE `tag`;

-- DropTable
DROP TABLE `test`;

-- DropTable
DROP TABLE `useranswer`;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ProductCategory_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ProductCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
