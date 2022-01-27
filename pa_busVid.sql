CREATE PROCEDURE paListarAdministradores
AS
SELECT * FROM Administrador;

CREATE PROCEDURE paAdministrador_ObtenerAdmin 
	@dni VARCHAR(8),
	@password VARCHAR(100)
AS
BEGIN
	SET NOCOUNT ON;
	SELECT * From Administrador
	Where dni = @dni AND password = @password
END

CREATE PROCEDURE paAdministrador_ObtenerXDni
@dni VARCHAR(8)
AS
SELECT * FROM Administrador
WHERE dni = @dni;

CREATE PROCEDURE paAdministrador_insertar
	@password varchar(100),
	@dni varchar(8),
	@nombre varchar(20),
	@saltPassword varchar(100)
AS
BEGIN
	SET NOCOUNT ON;
	Insert into Administrador(dni, password, nombre, saltPassword)
	Values (@dni, @password, @nombre, @saltPassword)
END

CREATE PROCEDURE paAdministrador_Modificar
	@idAdministrador int,
	@password varchar(100),
	@dni varchar(8),
	@nombre varchar(20),
	@saltPassword varchar(100)
AS
BEGIN
	SET NOCOUNT ON;
	update Administrador
	set
		password=@password,
		dni=@dni,
		nombre=@nombre,
		saltPassword= @saltPassword
	Where idAdministrador =@idAdministrador
END

CREATE PROCEDURE paAdministrador_Eliminar 
@idAdministrador int
AS
BEGIN
	DELETE FROM Administrador WHERE idAdministrador = @idAdministrador 
END

CREATE PROCEDURE paCiudad_Listar
AS
SELECT * FROM Ciudad;

CREATE PROCEDURE paBus_Listar
AS
SELECT * FROM Bus;

CREATE PROCEDURE paBus_Insertar
@nroPlaca VARCHAR(8),
@marca VARCHAR(15),
@modelo VARCHAR(15),
@nroAsientos INT
AS
BEGIN
INSERT INTO Bus (nroPlaca, marca, modelo, nroAsientos)
VALUES (@nroPlaca, @marca, @modelo, @nroAsientos);
SELECT SCOPE_IDENTITY()
END

CREATE PROCEDURE paViaje_Listar
AS
SELECT * FROM VistaViaje;

CREATE PROCEDURE paViaje_Obtener
	@idViaje INT
AS 
BEGIN
SELECT * FROM Viaje
WHERE idViaje = @idViaje;
END

CREATE PROCEDURE paViaje_Insertar
@fecha DATE,
@horaInicio TIME,
@nroAsientosDisp INT,
@precio FLOAT,
@idBus INT,
@idAdministrador INT
AS
BEGIN
INSERT INTO Viaje (fecha, horaInicio, nroAsientosDisp, precio, idBus, idAdministrador)
VALUES (@fecha, @horaInicio, @nroAsientosDisp, @precio, @idBus, @idAdministrador);
SELECT SCOPE_IDENTITY()
END;

CREATE PROCEDURE paViaje_Modificar
	@idViaje INT,
	@nroAsientosDisp INT
AS
BEGIN
	SET NOCOUNT ON;
	update Viaje
	set
		nroAsientosDisp=@nroAsientosDisp
	Where idViaje =@idViaje;
SELECT SCOPE_IDENTITY();
END


CREATE PROCEDURE paCiudadExtremo_Insertar
@idCiudad INT,
@idViaje INT,
@tipo VARCHAR(7)
AS
INSERT INTO CiudadExtremo (idCiudad, idViaje, tipo)
VALUES (@idCiudad, @idViaje, @tipo);

CREATE PROCEDURE paPasajero_Insertar
@dni VARCHAR(8),
@nombre VARCHAR(8),
@apellidos VARCHAR(20)
AS
BEGIN
INSERT INTO Pasajero (dni, nombre, apellidos)
VALUES (@dni, @nombre, @apellidos);
SELECT SCOPE_IDENTITY()
END

CREATE PROCEDURE paPasaje_Insertar
@idViaje INT,
@idPasajero INT,
@cantidad INT
AS
INSERT INTO Pasaje (idViaje, idPasajero, cantidad)
VALUES (@idViaje, @idPasajero, @cantidad);
