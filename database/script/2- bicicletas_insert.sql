use alquiler_bicicletas;

INSERT INTO `alquiler_bicicletas`.`usuarios` (`email`, `contraseña`, `nombre`, `apellido`, `telefono`, `direccion`) 
VALUES 
('usuario1@example.com', 'password123', 'Juan', 'Pérez', '123456789', 'Calle Falsa 123'),
('usuario2@example.com', 'password456', 'María', 'Gómez', '987654321', 'Avenida Libertador 456'),
('usuario3@example.com', 'password789', 'Carlos', 'Rodríguez', '123987456', 'Calle del Sol 789'),
('usuario4@example.com', 'password321', 'Ana', 'López', '456123789', 'Calle del Mar 101'),
('usuario5@example.com', 'password654', 'Pedro', 'Sánchez', '789456123', 'Calle Real 202'),
('usuario6@example.com', 'password111', 'Luisa', 'Morales', '321654987', 'Calle Larga 303'),
('usuario7@example.com', 'password222', 'José', 'Fernández', '654987321', 'Calle Nueva 404'),
('usuario8@example.com', 'password333', 'Marta', 'Díaz', '987321654', 'Avenida Central 505'),
('usuario9@example.com', 'password444', 'David', 'Jiménez', '321987654', 'Calle de la Luna 606'),
('usuario10@example.com', 'password555', 'Laura', 'Martínez', '654321987', 'Calle 7 de Octubre 707');



INSERT INTO `alquiler_bicicletas`.`bicicletas` (`tipo`, `marca`, `estado`)
VALUES 
('urbana', 'Bianchi', 'disponible'),
('de montaña', 'Trek', 'en uso'),
('eléctrica', 'Shimano', 'en reparación'),
('híbrida', 'Giant', 'disponible'),
('urbana', 'Cannondale', 'disponible'),
('de montaña', 'Specialized', 'en uso'),
('eléctrica', 'Orbea', 'disponible'),
('híbrida', 'Merida', 'en reparación'),
('urbana', 'Cervélo', 'disponible'),
('de montaña', 'Scott', 'en uso');

INSERT INTO `alquiler_bicicletas`.`ubicaciones` (`nombre_estacion`, `direccion`, `latitud`, `longitud`)
VALUES 
('Estación 1', 'Calle Falsa 123', 40.712776, -74.005974),
('Estación 2', 'Avenida Libertador 456', 40.730610, -73.935242),
('Estación 3', 'Calle del Sol 789', 40.748817, -73.985428),
('Estación 4', 'Calle del Mar 101', 40.689247, -74.044502),
('Estación 5', 'Calle Real 202', 40.758896, -73.985130),
('Estación 6', 'Calle Larga 303', 40.773964, -73.965355),
('Estación 7', 'Calle Nueva 404', 40.736795, -73.984139),
('Estación 8', 'Avenida Central 505', 40.755977, -73.985317),
('Estación 9', 'Calle de la Luna 606', 40.712216, -74.22655),
('Estación 10', 'Calle 7 de Octubre 707', 40.757973, -73.973748);


INSERT INTO `alquiler_bicicletas`.`alquileres` (`usuario_id`, `bicicleta_id`, `recogida_id`, `entrega_id`, `fecha_inicio`, `fecha_fin`, `duracion`, `costo`)
VALUES 
(1, 1, 1, 2, '2024-11-01 09:00:00', '2024-11-01 12:00:00', 180, 100),
(2, 2, 2, 3, '2024-11-02 10:00:00', '2024-11-02 14:00:00', 240, 120),
(3, 3, 3, 4, '2024-11-03 11:00:00', '2024-11-03 13:30:00', 150, 80),
(4, 4, 4, 5, '2024-11-04 08:30:00', '2024-11-04 11:30:00', 180, 90),
(5, 5, 5, 6, '2024-11-05 09:30:00', '2024-11-05 12:00:00', 150, 85),
(6, 6, 6, 7, '2024-11-06 10:00:00', '2024-11-06 13:30:00', 210, 110),
(7, 7, 7, 8, '2024-11-07 09:00:00', '2024-11-07 11:00:00', 120, 70),
(8, 8, 8, 9, '2024-11-08 11:00:00', '2024-11-08 14:00:00', 180, 100),
(9, 9, 9, 10, '2024-11-09 08:00:00', '2024-11-09 10:30:00', 150, 90),
(10, 10, 10, 1, '2024-11-10 14:00:00', '2024-11-10 17:00:00', 180, 95);


INSERT INTO `alquiler_bicicletas`.`disponibilidad_bicicletas` (`estado`, `bicicleta_id`, `ubicacion_id`)
VALUES 
('disponible', 1, 1),
('disponible', 2, 2),
('noDisponible', 3, 3),
('disponible', 4, 4),
('disponible', 5, 5),
('noDisponible', 6, 6),
('disponible', 7, 7),
('noDisponible', 8, 8),
('disponible', 9, 9),
('noDisponible', 10, 10);

INSERT INTO `alquiler_bicicletas`.`pagos` (`alquiler_id`, `fecha_pago`, `factura`, `metodo_pago`)
VALUES 
(1, '2024-11-01 12:30:00', 1001, 'tarjeta'),
(2, '2024-11-02 14:30:00', 1002, 'efectivo'),
(3, '2024-11-03 13:45:00', 1003, 'transferencia'),
(4, '2024-11-04 12:00:00', 1004, 'efectivo'),
(5, '2024-11-05 13:15:00', 1005, 'tarjeta'),
(6, '2024-11-06 14:00:00', 1006, 'otro'),
(7, '2024-11-07 12:30:00', 1007, 'tarjeta'),
(8, '2024-11-08 14:30:00', 1008, 'efectivo'),
(9, '2024-11-09 11:45:00', 1009, 'transferencia'),
(10, '2024-11-10 17:30:00', 1010, 'otro');



