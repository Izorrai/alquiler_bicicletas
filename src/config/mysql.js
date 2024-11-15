import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

class Mysql {
    constructor() {
        this._connection = null; // Conexión privada
    }

    // Establecer la conexión si aún no existe
    async connect() {
        if (!this._connection) {
            try {
                this._connection = await mysql.createConnection({
                    host: DB_HOST,
                    port: DB_PORT,
                    user: DB_USER,
                    password: DB_PASSWORD,
                    database: DB_DATABASE,
                });
                console.log("Conexión exitosa con la base de datos");
            } catch (error) {
                console.error("Error de conexión con la base de datos:", error.message);
                throw error; // Re-lanzamos el error para que el caller lo maneje
            }
        }
        return this._connection; // Retornamos la conexión activa
    }

    // Desconectar solo si la conexión está activa
    async disconnect() {
        if (this._connection) {
            try {
                await this._connection.end(); // Cerrar la conexión
                console.log("Conexión con la base de datos cerrada");
            } catch (error) {
                console.error("Error al desconectar de la base de datos:", error.message);
            } finally {
                this._connection = null; // Resetear la conexión a null
            }
        }
    }

    // Ejecutar una consulta SQL
    async query(sql, params = []) {
        const connection = await this.connect();
        try {
            const [rows] = await connection.query(sql, params);
            return rows; // Retornar los resultados de la consulta
        } catch (error) {
            console.error("Error al ejecutar la consulta:", error.message);
            throw error; // Re-lanzamos el error para que el caller lo maneje
        }
    }

    // Método opcional para verificar si hay conexión activa
    isConnected() {
        return this._connection && this._connection._pool; // Verifica si la conexión está activa
    }
}

export default Mysql;
