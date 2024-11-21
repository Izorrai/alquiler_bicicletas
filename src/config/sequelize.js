import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: 3306,
  define: {
    freezeTableName: true,  
    timestamps: false,      
  },
})


async function testConexion(){

  try {
      await sequelize.authenticate();
        console.log("Conexion establecida")
  } catch (error){
    console.error("No se ha podido conectar")

  }

} 

testConexion();

export default sequelize;

