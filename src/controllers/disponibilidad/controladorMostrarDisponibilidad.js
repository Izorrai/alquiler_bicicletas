import controladorDisponibilidad from "../../controllers/disponibilidad/controladorDisponibilidad.js";

async function mostrarBicicletasPorUbicacion(req, res) {
    try {
        const ubicaciones = await controladorDisponibilidad.buscarBicicletasPorUbicacion();
        
        if (!ubicaciones || ubicaciones.length === 0) {
            return res.status(404).send("No se encontraron ubicaciones con bicicletas.");
        }
        
        res.render("disponibilidad/mostrarDisponibilidad", { ubicaciones }); 
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        res.status(500).send("Hubo un error al obtener las ubicaciones.");
    }
}

export default {
    mostrarDisponibilidad: mostrarBicicletasPorUbicacion
};