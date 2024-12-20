use alquiler_bicicletas;

INSERT INTO `alquiler_bicicletas`.`usuarios` (`email`, `contraseña`,`nombre`, `apellido`, `telefono`, `direccion`,`roles`) 
VALUES 
('usuario1@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Juan', 'Pérez', '123456789', 'Calle Falsa 123', 'ADMIN'),
('usuario2@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'María', 'Gómez', '987654321', 'Avenida Libertador 456','CLIENTE'),
('usuario3@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Carlos', 'Rodríguez', '123987456', 'Calle del Sol 789','CLIENTE'),
('usuario4@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Ana', 'López', '456123789', 'Calle del Mar 101','CLIENTE'),
('usuario5@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Pedro', 'Sánchez', '789456123', 'Calle Real 202','CLIENTE'),
('usuario6@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Luisa', 'Morales', '321654987', 'Calle Larga 303', 'ADMIN'),
('usuario7@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'José', 'Fernández', '654987321', 'Calle Nueva 404','CLIENTE'),
('usuario8@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Marta', 'Díaz', '987321654', 'Avenida Central 505','CLIENTE'),
('usuario9@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'David', 'Jiménez', '321987654', 'Calle de la Luna 606','CLIENTE'),
('usuario10@example.com', '$2b$10$OdGXneb4cCL4DrRkirihmeU6aBvwwYQ7iQMM1MAfQmdWaw19sI9mK', 'Laura', 'Martínez', '654321987', 'Calle 7 de Octubre 707','CLIENTE');


-- Primero, insertar 10 ubicaciones en la tabla `ubicaciones`
INSERT INTO `alquiler_bicicletas`.`ubicaciones` (`nombre_estacion`, `direccion`, `latitud`, `longitud`)
VALUES
('Estacion Centro', 'Calle 1, Centro', 19.432608, -99.133209),
('Estacion Norte', 'Calle 2, Norte', 19.445, -99.160),
('Estacion Sur', 'Calle 3, Sur', 19.300, -99.180),
('Estacion Este', 'Calle 4, Este', 19.440, -99.150),
('Estacion Oeste', 'Calle 5, Oeste', 19.480, -99.170),
('Estacion Parque', 'Parque Central', 19.430, -99.140),
('Estacion Universidad', 'Calle 6, Universidad', 19.420, -99.100),
('Estacion Terminal', 'Avenida 1, Terminal', 19.460, -99.120),
('Estacion Barrio', 'Calle 7, Barrio', 19.470, -99.130),
('Estacion Industrial', 'Zona Industrial, Calle 8', 19.490, -99.140);



-- Cicletas para la Estacion Centro
INSERT INTO `alquiler_bicicletas`.`bicicletas` (`tipo`, `marca`, `estado`)
VALUES
('Montaña', 'Marca A', 'disponible'),
('Carretera', 'Marca B', 'en uso'),        -- Bicicleta en uso
('Híbrida', 'Marca C', 'disponible'),
('BMX', 'Marca D', 'disponible'),
('Eléctrica', 'Marca E', 'en uso'),         -- Bicicleta en uso
('Carretera', 'Marca F', 'disponible'),
('Montaña', 'Marca G', 'disponible'),
('Híbrida', 'Marca H', 'en uso'),           -- Bicicleta en uso
('BMX', 'Marca I', 'disponible'),
('Eléctrica', 'Marca J', 'disponible');


-- Inserción de alquileres
INSERT INTO `alquiler_bicicletas`.`alquileres` (`usuario_id`, `bicicleta_id`, `recogida_id`, `entrega_id`, `fecha_inicio`, `fecha_fin`, `duracion`, `costo`)
VALUES 
(1, 1, 1, 2, '2024-11-01 09:00:00', '2024-11-01 12:00:00', 180, 100),
(1, 2, 1, 3, '2024-11-02 10:00:00', '2024-11-02 13:00:00', 180, 110),
(1, 3, 2, 4, '2024-11-03 11:00:00', '2024-11-03 14:00:00', 180, 90),
(1, 4, 3, 5, '2024-11-04 08:30:00', '2024-11-04 11:30:00', 180, 95),
(1, 5, 4, 6, '2024-11-05 09:30:00', '2024-11-05 12:00:00', 150, 85),
(1, 6, 5, 7, '2024-11-06 10:00:00', '2024-11-06 13:00:00', 180, 120),
(1, 7, 6, 8, '2024-11-07 09:00:00', '2024-11-07 12:00:00', 180, 130),
(1, 8, 7, 9, '2024-11-08 11:00:00', '2024-11-08 14:00:00', 180, 100),
(1, 9, 8, 10, '2024-11-09 10:00:00', '2024-11-09 12:00:00', 120, 95),
(1, 10, 9, 1, '2024-11-10 14:00:00', '2024-11-10 17:00:00', 180, 105),

(2, 1, 1, 2, '2024-11-01 09:00:00', '2024-11-01 12:00:00', 180, 100),
(2, 2, 2, 3, '2024-11-02 10:00:00', '2024-11-02 13:00:00', 180, 110),
(2, 3, 3, 4, '2024-11-03 11:00:00', '2024-11-03 14:00:00', 180, 90),
(2, 4, 4, 5, '2024-11-04 08:30:00', '2024-11-04 11:30:00', 180, 95),
(2, 5, 5, 6, '2024-11-05 09:30:00', '2024-11-05 12:00:00', 150, 85),
(2, 6, 6, 7, '2024-11-06 10:00:00', '2024-11-06 13:00:00', 180, 120),
(2, 7, 7, 8, '2024-11-07 09:00:00', '2024-11-07 12:00:00', 180, 130),
(2, 8, 8, 9, '2024-11-08 11:00:00', '2024-11-08 14:00:00', 180, 100),
(2, 9, 9, 10, '2024-11-09 10:00:00', '2024-11-09 12:00:00', 120, 95),
(2, 10, 10, 1, '2024-11-10 14:00:00', '2024-11-10 17:00:00', 180, 105),

(3, 1, 1, 2, '2024-11-01 09:00:00', '2024-11-01 12:00:00', 180, 100),
(3, 2, 2, 3, '2024-11-02 10:00:00', '2024-11-02 13:00:00', 180, 110),
(3, 3, 3, 4, '2024-11-03 11:00:00', '2024-11-03 14:00:00', 180, 90),
(3, 4, 4, 5, '2024-11-04 08:30:00', '2024-11-04 11:30:00', 180, 95),
(3, 5, 5, 6, '2024-11-05 09:30:00', '2024-11-05 12:00:00', 150, 85),
(3, 6, 6, 7, '2024-11-06 10:00:00', '2024-11-06 13:00:00', 180, 120),
(3, 7, 7, 8, '2024-11-07 09:00:00', '2024-11-07 12:00:00', 180, 130),
(3, 8, 8, 9, '2024-11-08 11:00:00', '2024-11-08 14:00:00', 180, 100),
(3, 9, 9, 10, '2024-11-09 10:00:00', '2024-11-09 12:00:00', 120, 95),
(3, 10, 10, 1, '2024-11-10 14:00:00', '2024-11-10 17:00:00', 180, 105);

-- Inserción de pagos correspondientes a los 30 alquileres
-- Inserción de pagos con la columna 'deuda' correspondiente
INSERT INTO `alquiler_bicicletas`.`pagos` (`alquiler_id`, `factura`, `metodo_pago`, `deuda`)
VALUES
-- Alquileres del primer usuario (usuario_id = 1)
(1, 'F1001', 'tarjeta', 'abonado'),
(2, 'F1002', 'efectivo', 'abonado'),
(3, 'F1003', 'transferencia', 'pendiente'),
(4, 'F1004', 'tarjeta', 'abonado'),
(5, 'F1005', 'efectivo', 'pendiente'),
(6, 'F1006', 'transferencia', 'abonado'),
(7, 'F1007', 'efectivo', 'pendiente'),
(8, 'F1008', 'tarjeta', 'abonado'),
(9, 'F1009', 'efectivo', 'pendiente'),
(10, 'F1010', 'tarjeta', 'abonado'),

-- Alquileres del segundo usuario (usuario_id = 2)
(11, 'F1011', 'efectivo', 'abonado'),
(12, 'F1012', 'transferencia', 'pendiente'),
(13, 'F1013', 'tarjeta', 'abonado'),
(14, 'F1014', 'efectivo', 'pendiente'),
(15, 'F1015', 'tarjeta', 'abonado'),
(16, 'F1016', 'transferencia', 'pendiente'),
(17, 'F1017', 'efectivo', 'abonado'),
(18, 'F1018', 'tarjeta', 'pendiente'),
(19, 'F1019', 'efectivo', 'abonado'),
(20, 'F1020', 'transferencia', 'pendiente'),

-- Alquileres del tercer usuario (usuario_id = 3)
(21, 'F1021', 'tarjeta', 'abonado'),
(22, 'F1022', 'efectivo', 'pendiente'),
(23, 'F1023', 'transferencia', 'abonado'),
(24, 'F1024', 'tarjeta', 'pendiente'),
(25, 'F1025', 'efectivo', 'abonado'),
(26, 'F1026', 'transferencia', 'pendiente'),
(27, 'F1027', 'efectivo', 'abonado'),
(28, 'F1028', 'tarjeta', 'pendiente'),
(29, 'F1029', 'efectivo', 'abonado'),
(30, 'F1030', 'tarjeta', 'pendiente');


-- Insertar 20 registros en la tabla disponibilidad_bicicletas
INSERT INTO `alquiler_bicicletas`.`disponibilidad_bicicletas` (`estado`, `bicicleta_id`, `ubicacion_id`) VALUES
('disponible', 1, 1),
('noDisponible', 2, 1),
('disponible', 3, 2),
('disponible', 4, 2),
('noDisponible', 5, 3),
('disponible', 6, 3),
('disponible', 7, 4),
('noDisponible', 8, 4),
('disponible', 9, 5),
('disponible', 10, 5);











