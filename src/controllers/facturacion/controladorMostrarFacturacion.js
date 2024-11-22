import controladorFacturas from "../../controllers/facturacion/controladorFacturas.js";

async function mostrarFacturas(req, res) {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
        return res.status(400).send("ID de usuario inválido");
    }

    try {
        const facturas = await controladorFacturas.buscarFacturas(id);
        
        if (!facturas || facturas.length === 0) {
            return res.status(404).send("No se encontraron facturas para este usuario.");
        }
        
        res.render("facturas/mostrarFacturas", { facturas }); 
    } catch (error) {
        console.error("Error al obtener las facturas:", error);
        res.status(500).send("Hubo un error al obtener las facturas.");
    }
}

async function mostrarFacturasPerfil(req, res) {
    const id = req.session.user.usuario_id;
    
    if (isNaN(id)) {
        return res.status(400).send("ID de usuario inválido");
    }

    try {
        const facturas = await controladorFacturas.buscarFacturas(id);
        
        if (!facturas || facturas.length === 0) {
            return res.status(404).send("No se encontraron facturas para este usuario.");
        }
        
        res.render("facturas/mostrarFacturas", { facturas }); 
    } catch (error) {
        console.error("Error al obtener las facturas:", error);
        res.status(500).send("Hubo un error al obtener las facturas.");
    }
}

export const functions = {
    mostrarFacturas,
    mostrarFacturasPerfil
};

export default functions;