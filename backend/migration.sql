-- Active: 1690774493837@@localhost@3306
DROP DATABASE IF EXISTS dbOdonto;

CREATE DATABASE dbOdonto;

USE dbOdonto;

CREATE TABLE Users (
  id_user INT NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  matricula INT NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'Aluno',
  PRIMARY KEY (id_user)
);

CREATE TABLE Images (
  id_image INT NOT NULL AUTO_INCREMENT,
  link_image VARCHAR(255) NOT NULL,
  image_nota INT NOT NULL, -- Adicionando a coluna image_nota para armazenar a nota da imagem
  PRIMARY KEY (id_image)
);

CREATE TABLE Notas (
  id_notas INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_image INT NOT NULL,
  nota INT NOT NULL,
  PRIMARY KEY (id_notas),
  FOREIGN KEY (id_user) REFERENCES Users(id_user),
  FOREIGN KEY (id_image) REFERENCES Images(id_image)
);

SET SQL_SAFE_UPDATES = 0;