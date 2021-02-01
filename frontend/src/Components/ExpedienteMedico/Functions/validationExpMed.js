export function validationExpMed(state) {
    var msg = "";
    if (state.otro && !state.otroEspecificar.trim()) msg += "- Otro/Especificar\n"; 
    if (state.citaEsterilizacion && !state.fechaEsterilizacion) msg += "- Fecha de esterilización\n"; 

    if (state.puppy && !state.fechaPuppy) msg += "- Fecha puppy\n"; 
    if (state.refuerzoPuppy && !state.fechaRefuerzoPuppy) msg += "- Fecha refuerzo puppy\n"; 
    if (state.multiple && !state.fechaMultiple) msg += "- Fecha múlitple\n"; 
    if (state.refuerzoMultiple && !state.fechaRefuerzoMultiple) msg += "- Fecha refuerzo múltiple\n"; 
    if (state.rabia && !state.fechaRabia) msg += "- Fecha rabia\n"; 

    state.tratamiento.forEach((row) => {
        if (!(row.fechaInicio && row.fechaFinal && row.comentarios.trim() && row.accion.trim())) {
            msg += "- Completar campos en tratamiento";
            return;
        }
    });

    if (msg) {
        return { isValid: false, msg: msg};
    } else {
        return { isValid: true };
    }
}