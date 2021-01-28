export function validationExpMed(state) {
    var msg = "Faltan por llenar los siguientes campos\n";
    if (state.otro && !state.otroEspecificar) msg += "- Otro/Especificar\n"; 
    if (state.citaEsterilizacion && !state.fechaEsterilizacion) msg += "- Fecha de esterilización\n"; 

    if (state.puppy && !state.fechaPuppy) msg += "- Fecha puppy\n"; 
    if (state.refuerzoPuppy && !state.fechaRefuerzoPuppy) msg += "- Fecha refuerzo puppy\n"; 
    if (state.multiple && !state.fechaMultiple) msg += "- Fecha múlitple\n"; 
    if (state.refuerzoMultiple && !state.fechaRefuerzoMultiple) msg += "- Fecha refuerzo múltiple\n"; 
    if (state.rabia && !state.fechaRabia) msg += "- Fecha rabia\n"; 

    state.tratamiento.forEach((row) => {
        if (!(row.fechaInicio && row.fechaFinal && row.comentarios && row.accion)) {
            msg += "- Completar campos en tratamiento";
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