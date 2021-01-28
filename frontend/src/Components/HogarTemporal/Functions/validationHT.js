export function validationHT(state) {
    var msg = "Faltan por llenar los siguientes campos\n";
    if (!state.tipoHT) msg += "- Tipo HT\n"; 
    if (!state.nombreHT) msg += "- Nombre\n"; 
    if (!state.telefonoHT) msg += "- Teléfono\n"; 
    if (!state.fechaInicioHT) msg += "- Fecha inicio\n"; 
    if (!state.fechaFinalHT) msg += "- Fecha final\n"; 
    if (!state.calle) msg += "- Calle\n"; 
    if (!state.numero) msg += "- Número\n"; 
    if (!state.colonia) msg += "- Colonia\n"; 
    if (!state.municipio) msg += "- Municipio\n";
    if (!state.foto) msg += "- Foto\n"; 

    state.comentarios.forEach((row) => {
        if (!(row.observaciones && row.accion && row.fecha)) {
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