/usersSchema


CREATE SCHEMA `project1` ;
CREATE TABLE `project1`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `userName` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE);

CREATE TABLE `project1`.`vacations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(140) NOT NULL,
  `destination` VARCHAR(70) NOT NULL,
  `price` INT NOT NULL,
  `date` DATE NOT NULL,
  `followers` INT NOT NULL,
  PRIMARY KEY (`id`));
