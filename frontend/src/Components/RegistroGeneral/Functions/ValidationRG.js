export function validationRG(state) {
    var msg = "Faltan por llenar los siguientes campos\n";
    if (!state.nombre) msg += "- Nombre\n"; 
    if (!state.edad) msg += "- Edad\n"; 
    if (!state.genero) msg += "- Género\n"; 
    if (!state.especie) msg += "- Especie\n"; 
    if (!state.fechaDeRescate) msg += "- Fecha de rescate\n"; 
    if (!state.estatus) msg += "- Estatus\n"; 
    if (!state.calle) msg += "- Calle\n"; 
    if (!state.numero) msg += "- Número\n"; 
    if (!state.colonia) msg += "- Colonia\n"; 
    if (!state.municipio) msg += "- Municipio\n";
    if (!state.senasParticulares) msg += "- Señas particulares\n";
    if (!state.rescatistas.length) msg += "- Rescatistas\n"; 
    if (!state.foto) msg += "- Foto\n"; 

    if (msg === "Faltan por llenar los siguientes campos\n") {
        return true;
    } else {
        alert(msg);
        return false;
    }
}