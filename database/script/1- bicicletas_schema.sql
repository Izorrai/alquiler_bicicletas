-- MySQL Script generated by MySQL Workbench
-- Tue Nov 12 15:15:49 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema alquiler_bicicletas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `alquiler_bicicletas` ;

-- -----------------------------------------------------
-- Schema alquiler_bicicletas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `alquiler_bicicletas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `alquiler_bicicletas` ;

-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`usuarios` (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(80) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `direccion` VARCHAR(255) NULL,
  `fecha_registro` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usuario_id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`bicicletas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`bicicletas` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`bicicletas` (
  `bicicleta_id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(50) NULL DEFAULT NULL,
  `marca` VARCHAR(50) NULL DEFAULT NULL,
  `estado` ENUM('disponible', 'en uso', 'en reparación') NULL DEFAULT 'disponible',
  `fecha_registro` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`bicicleta_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`ubicaciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`ubicaciones` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`ubicaciones` (
  `ubicacion_id` INT NOT NULL AUTO_INCREMENT,
  `nombre_estacion` VARCHAR(100) NULL DEFAULT NULL,
  `direccion` VARCHAR(255) NULL DEFAULT NULL,
  `latitud` DECIMAL(10,8) NULL DEFAULT NULL,
  `longitud` DECIMAL(11,8) NULL DEFAULT NULL,
  PRIMARY KEY (`ubicacion_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`alquileres`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`alquileres` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`alquileres` (
  `alquiler_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `bicicleta_id` INT NOT NULL,
  `recogida_id` INT NOT NULL,
  `entrega_id` INT NULL,
  `fecha_inicio` DATETIME NULL DEFAULT NULL,
  `fecha_fin` DATETIME NULL DEFAULT NULL,
  `duracion` INT NULL DEFAULT NULL,
  `costo` INT NULL DEFAULT NULL,
  PRIMARY KEY (`alquiler_id`),
  INDEX `id_usuario` (`usuario_id` ASC) VISIBLE,
  INDEX `id_bicicleta` (`bicicleta_id` ASC) VISIBLE,
  INDEX `id_ubicacion` (`recogida_id` ASC) VISIBLE,
  INDEX `fk_alquileres_ubicaciones1_idx` (`entrega_id` ASC) VISIBLE,
  CONSTRAINT `alquileres_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `alquiler_bicicletas`.`usuarios` (`usuario_id`),
  CONSTRAINT `alquileres_ibfk_2`
    FOREIGN KEY (`bicicleta_id`)
    REFERENCES `alquiler_bicicletas`.`bicicletas` (`bicicleta_id`),
  CONSTRAINT `alquileres_ibfk_3`
    FOREIGN KEY (`recogida_id`)
    REFERENCES `alquiler_bicicletas`.`ubicaciones` (`ubicacion_id`),
  CONSTRAINT `fk_alquileres_ubicaciones1`
    FOREIGN KEY (`entrega_id`)
    REFERENCES `alquiler_bicicletas`.`ubicaciones` (`ubicacion_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`disponibilidad_bicicletas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`disponibilidad_bicicletas` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`disponibilidad_bicicletas` (
  `estado` ENUM("disponible", "noDisponible") NOT NULL,
  `bicicleta_id` INT NOT NULL,
  `ubicacion_id` INT NOT NULL,
  INDEX `id_bicicleta` (`bicicleta_id` ASC) VISIBLE,
  INDEX `id_ubicacion` (`ubicacion_id` ASC) VISIBLE,
  CONSTRAINT `disponibilidad_bicicletas_ibfk_1`
    FOREIGN KEY (`bicicleta_id`)
    REFERENCES `alquiler_bicicletas`.`bicicletas` (`bicicleta_id`),
  CONSTRAINT `disponibilidad_bicicletas_ibfk_2`
    FOREIGN KEY (`ubicacion_id`)
    REFERENCES `alquiler_bicicletas`.`ubicaciones` (`ubicacion_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `alquiler_bicicletas`.`pagos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `alquiler_bicicletas`.`pagos` ;

CREATE TABLE IF NOT EXISTS `alquiler_bicicletas`.`pagos` (
  `pago_id` INT NOT NULL AUTO_INCREMENT,
  `alquiler_id` INT NOT NULL,
  `fecha_pago` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `factura` INT NOT NULL,
  `metodo_pago` ENUM('tarjeta', 'efectivo', 'transferencia', 'otro') NULL DEFAULT 'efectivo',
  PRIMARY KEY (`pago_id`),
  INDEX `id_alquiler` (`alquiler_id` ASC) VISIBLE,
  CONSTRAINT `pagos_ibfk_1`
    FOREIGN KEY (`alquiler_id`)
    REFERENCES `alquiler_bicicletas`.`alquileres` (`alquiler_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
