function decodificarVacuna(vacuna, especie) {
    if (!vacuna || !especie) return "";

    const decoder = {
        vacuna1: {
            Canino: "Puppy",
            Felino: "Triple Viral Felina",
            Otro: "Vacuna 1",
        },
        vacuna2: {
            Canino: "Refuerzo Puppy",
            Felino: "Refuerzo Triple Viral Felina",
            Otro: "Vacuna 2",
        },
        vacuna3: {
            Canino: "Multiple",
            Felino: "Leucemia",
            Otro: "Vacuna 3",
        },
        vacuna4: {
            Canino: "Refuerzo Multiple",
            Felino: "Desparasitacion",
            Otro: "Vacuna 4",
        },
        vacuna5: {
            Canino: "Rabia",
            Felino: "Rabia",
            Otro: "Vacuna 5",
        },
    };

    return decoder[vacuna][especie];
};

export function validationExpMed(state) {
    var msg = "";

    console.log(state);
    if (state.otro && !state.otroEspecificar.trim()) msg += "- Otro/Especificar\n"; 
    if (state.citaEsterilizacion === "Sí" && !state.fechaEsterilizacion) msg += "- Fecha de esterilización\n"; 

    if (state.vacuna1 && !state.fechaVacuna1) msg += "- Fecha" + decodificarVacuna("vacuna1", state.especie) + "\n"; 
    if (state.vacuna2 && !state.fechaVacuna2) msg += "- Fecha" + decodificarVacuna("vacuna2", state.especie) + "\n"; 
    if (state.vacuna3 && !state.fechaVacuna3) msg += "- Fecha" + decodificarVacuna("vacuna3", state.especie) + "\n"; 
    if (state.vacuna4 && !state.fechaVacuna4) msg += "- Fecha" + decodificarVacuna("vacuna4", state.especie) + "\n"; 
    if (state.vacuna5 && !state.fechaVacuna5) msg += "- Fecha" + decodificarVacuna("vacuna5", state.especie) + "\n"; 



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