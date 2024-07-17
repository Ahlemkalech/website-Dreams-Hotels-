-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Hotels
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Hotels
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Hotels` DEFAULT CHARACTER SET utf8 ;
USE `Hotels` ;

-- -----------------------------------------------------
-- Table `Hotels`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hotels`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `id_UNIQUE` (`idusers` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Hotels`.`hotels`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Hotels`.`hotels` (
  `idhotels` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `imageUrl` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `rating` INT NULL,
  UNIQUE INDEX `id_UNIQUE` (`idhotels` ASC) VISIBLE,
  PRIMARY KEY (`idhotels`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `imageUrl_UNIQUE` (`imageUrl` ASC) VISIBLE,
  UNIQUE INDEX `description_UNIQUE` (`description` ASC) VISIBLE,
  UNIQUE INDEX `rating_UNIQUE` (`rating` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
