CREATE DATABASE busVidDB;

CREATE TABLE Administrador(
	idAdministrador INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	dni VARCHAR(8) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	password VARCHAR(100) NOT NULL,
	saltPassword VARCHAR(100) NOT NULL
);

CREATE TABLE Pasajero(
	idPasajero INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	dni VARCHAR(8) NOT NULL,
	nombre VARCHAR(8) NOT NULL,
	apellidos VARCHAR(20) NOT NULL
);

CREATE TABLE Ciudad(
	idCiudad INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(20) NOT NULL
);

CREATE TABLE Bus(
	idBus INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	nroPlaca VARCHAR(6) NOT NULL,
	marca VARCHAR(15) NOT NULL,
	modelo VARCHAR(15) NOT NULL,
	nroAsientos INT NOT NULL
)

CREATE TABLE Viaje(
	idViaje INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
	fecha DATE NOT NULL,
	horaInicio TIME NOT NULL,
	nroAsientosDisp INT NOT NULL,
	precio FLOAT NOT NULL,
	idBus INT FOREIGN KEY REFERENCES Bus(idBus),
	idAdministrador INT NOT NULL FOREIGN KEY REFERENCES Administrador(idAdministrador)
);

CREATE TABLE Pasaje(
	idPasaje INT NOT NULL IDENTITY(1,1),
	idViaje INT NOT NULL FOREIGN KEY REFERENCES Viaje(idViaje),
	idPasajero INT NOT NULL FOREIGN KEY REFERENCES Pasajero(idPasajero),
	cantidad INT NOT NULL,
	CONSTRAINT PK_Pasaje PRIMARY KEY(idPasaje, idViaje, idPasajero)
)

CREATE TABLE CiudadExtremo(
	idCiudad INT NOT NULL FOREIGN KEY REFERENCES Ciudad(idCiudad) ON DELETE CASCADE,
	idViaje INT NOT NULL FOREIGN KEY REFERENCES Viaje(idViaje) ON DELETE CASCADE,
	CONSTRAINT PK_CiudadExtremo PRIMARY KEY(idCiudad, idViaje),
	tipo VARCHAR(7) NOT NULL
)

INSERT INTO Administrador
VALUES ('74244049', 'Esteban','123', '123');

INSERT INTO Ciudad
VALUES ('Lima');

INSERT INTO Ciudad
VALUES ('Trujillo');

INSERT INTO Ciudad
VALUES ('Huancayo');

INSERT INTO Ciudad
VALUES ('Arequipa');

INSERT INTO Ciudad
VALUES ('Iquitos');

INSERT INTO Bus
VALUES ('4HF34N', 'Mercedes-Benz', 'ACDUE88DJ89', '40');

INSERT INTO Bus
VALUES ('ASD3N5', 'Mercedes-Benz', 'CDJN33DNDJ3', '60');

INSERT INTO Bus
VALUES ('O92N45', 'Hyundai', 'SAD93KDMC9I', '45');

INSERT INTO Bus
VALUES ('8F8F8F', 'Mitsubishi', 'FVNGJRUGJN', '50');

INSERT INTO Viaje
VALUES ('2022-01-28','15:00', 45,20.00, 3, 1);

INSERT INTO Viaje
VALUES ('2022-01-29', '15:00:00', 40,15.50, 1, 1)

INSERT INTO CiudadExtremo
VALUES (1, 1, 'Inicio');

INSERT INTO CiudadExtremo
VALUES (2, 1, 'Destino');

INSERT INTO CiudadExtremo
VALUES (2, 2, 'Inicio');

INSERT INTO CiudadExtremo
VALUES (3, 2, 'Destino');

CREATE VIEW VistaViaje AS
SELECT DISTINCT 
Viaje.idViaje idViaje, Viaje.fecha, Viaje.horaInicio, Viaje.nroAsientosDisp, Viaje.precio,
Bus.idBus, Bus.nroPlaca,
Administrador.idAdministrador, Administrador.nombre,
(CASE WHEN CiudadExtremo.tipo = 'Inicio' THEN Ciudad.idCiudad 
	ELSE (SELECT Ciudad.idCiudad FROM CiudadExtremo
			INNER JOIN Ciudad ON Ciudad.idCiudad = CiudadExtremo.idCiudad
			WHERE CiudadExtremo.tipo = 'Inicio' AND CiudadExtremo.idViaje = Viaje.idViaje
		) END) AS idCiudadInicio,
(CASE WHEN CiudadExtremo.tipo = 'Inicio' THEN Ciudad.nombre 
	ELSE (SELECT Ciudad.nombre FROM CiudadExtremo
			INNER JOIN Ciudad ON Ciudad.idCiudad = CiudadExtremo.idCiudad
			WHERE CiudadExtremo.tipo = 'Inicio' AND CiudadExtremo.idViaje = Viaje.idViaje
		) END) AS inicio,
(CASE WHEN CiudadExtremo.tipo = 'Destino' THEN Ciudad.idCiudad
	ELSE (SELECT Ciudad.idCiudad FROM CiudadExtremo
			INNER JOIN Ciudad ON Ciudad.idCiudad = CiudadExtremo.idCiudad
			WHERE CiudadExtremo.tipo = 'Destino' AND CiudadExtremo.idViaje = Viaje.idViaje) 
		END) AS idCiudadDestino,
(CASE WHEN CiudadExtremo.tipo = 'Destino' THEN Ciudad.nombre 
	ELSE (SELECT Ciudad.nombre FROM CiudadExtremo
			INNER JOIN Ciudad ON Ciudad.idCiudad = CiudadExtremo.idCiudad
			WHERE CiudadExtremo.tipo = 'Destino' AND CiudadExtremo.idViaje = Viaje.idViaje) 
		END) AS destino
FROM CiudadExtremo
INNER JOIN Viaje ON Viaje.idViaje = CiudadExtremo.idViaje
INNER JOIN Bus ON Viaje.idBus = Bus.idBus	
INNER JOIN Administrador ON Viaje.idAdministrador = Administrador.idAdministrador
INNER JOIN Ciudad ON CiudadExtremo.idCiudad = Ciudad.idCiudad;



