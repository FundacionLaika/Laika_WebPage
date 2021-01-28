export function validationHT(state) {
    var msg = "Faltan por llenar los siguientes campos\n";
    if (!state.tipoHT) msg += "- Tipo HT\n"; 
    if (!state.nombreHT.trim()) msg += "- Nombre\n"; 
    if (!state.telefonoHT.trim()) msg += "- Teléfono\n"; 
    if (!state.fechaInicioHT) msg += "- Fecha inicio\n"; 
    if (!state.fechaFinalHT) msg += "- Fecha final\n"; 
    if (!state.calle.trim()) msg += "- Calle\n"; 
    if (!state.numero.trim()) msg += "- Número\n"; 
    if (!state.colonia.trim()) msg += "- Colonia\n"; 
    if (!state.municipio.trim()) msg += "- Municipio\n";
    if (!state.foto) msg += "- Foto\n"; 

    state.comentarios.forEach((row) => {
        if (!(row.observaciones.trim() && row.accion.trim() && row.fecha)) {
            msg += "- Completar campos en comentarios";
            return;
        }
    });

    if (msg === "Faltan por llenar los siguientes campos\n") {
        return true;
    } else {
        alert(msg);
        return false;
    }
}