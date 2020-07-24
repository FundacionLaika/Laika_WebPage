const handleConsultaPost = (req, res, db) => {

    const selectClause = {
        General:         `select    ar.ID_Animal,
                                    ar.Nombre,
                                    ar.Edad,
                                    ar.Genero,
                                    ar.Especie,
                                    ar.Estatus,
                                    ar.SenasParticulares,
                                    rte.Fecha AS FechaRescate,
                                    dirrte.Calle AS RteCalle,
                                    dirrte.Numero AS RteNumero,
                                    dirrte.Colonia AS RteColonia,
                                    dirrte.Municipio AS RteMunicipio,
                                    GROUP_CONCAT(rta.Nombre separator ', ') AS Rescatistas `,

        ExpedienteMedico: `select   ar.ID_Animal,
                                    diag.Atropellamiento,
                                    diag.TVT, 
                                    diag.Sarna_Piel,
                                    diag.Viral,
                                    diag.Embarazo, 
                                    diag.Cachorros,
                                    diag.Hemoparasitos, 
                                    diag.Otro,
                                    cv.Puppy,
                                    cv.RefuerzoPuppy,
                                    cv.Multiple,
                                    cv.RefuerzoMultiple,
                                    cv.Rabia,
                                    est.Fecha AS FechaEsterilizacion,
                                    est.EstaEsterilizado `,

        HogarTemporal:  `select     ar.ID_Animal,
                                    ht.Tipo_HT,
                                    ht.Responsable AS ResponsableHT,
                                    ht.Telefono AS TelefonoHT,
                                    ht.FechaInicio AS FechaInicioHT,
                                    ht.FechaFinal AS FechaFinalHT,
                                    dirht.Calle AS CalleHT,
                                    dirht.Numero AS NumeroHT,
                                    dirht.Colonia AS ColoniaHT,
                                    dirht.Municipio AS MunicipioHT `,

        Adopcion:       `select     ar.ID_Animal,
                                    adte.Nombre AS NombreAdte,
                                    adte.Telefono AS TelefonoAdte,
                                    adop.NombreAdoptado AS Adoptado,
                                    adop.Medio AS MedioAdop,
                                    adop.Fecha_Adopcion AS FechaAdop,
                                    adop.Visita_De_Adopcion AS VisitaAdop,
                                    diradte.Calle AS CalleAdte,
                                    diradte.Numero AS NumeroAdte,
                                    diradte.Colonia AS ColoniaAdte,
                                    diradte.Municipio AS MunicipioAdte `
    }

    const fromClause = `from    ANIMAL_RESCATADO ar,
                                RESCATISTA rta,
                                RESCATE rte,
                                DIRECCION_RESCATE dirrte,
                                EXPEDIENTE_MEDICO em,
                                DIAGNOSTICO diag,
                                CARTILLA_DE_VACUNACION cv,
                                ESTERILIZACION est,
                                HOGAR_TEMPORAL ht,
                                DIRECCION_HT dirht,
                                ADOPCION adop,
                                ADOPTANTE adte,
                                DIRECCION_ADOPTANTE diradte`;

    const joinConditions = ` where ar.ID_Animal = rta.ID_Animal
                            AND ar.ID_Animal = rte.ID_Animal
                            AND rte.ID_RESCATE = dirrte.ID_Rescate
                            AND ar.ID_Animal = em.ID_Animal
                            AND em.ID_Medico = diag.ID_Diagnostico
                            AND em.ID_Medico = est.ID_Medico
                            AND em.ID_Medico = cv.ID_Medico
                            AND ar.ID_Animal = ht.ID_Animal
                            AND ht.ID_HT = dirht.ID_Direccion_HT
                            AND ar.ID_Animal = adop.ID_Animal
                            AND adop.ID_Adopcion = adte.ID_Adopcion
                            AND adte.ID_Adoptante = diradte.ID_Adoptante `;

    const groupBy = ` group by ar.Nombre `;

    const hashTable = {
        nombre: "ar.Nombre",
        id: "ar.ID_Animal",
        estatus: "ar.Estatus",
        especie: "ar.Especie",
        menorAMayorNombre: "ar.Nombre ASC", 
        mayorAMenorNombre: "ar.Nombre Desc", 
        menorAMayorID: "ar.ID_Animal ASC", 
        mayorAMenorID: "ar.ID_Animal DESC", 
        fechaAdopcionMenor: "adop.Fecha_Adopcion ASC", 
        fechaAdopcionMayor: "adop.Fecha_Adopcion DESC",
        macho: "Macho",
        hembra: "Hembra",
        "0": false,
        "1": true,
        "SI": '1',
        "NO": '0',
        true: "1",
        false: "0"
    }

    const { tarjeta, keyword, filtroPorKeyWord, ordenar, rangoEdad, genero, vacunas, esterilizado, diagnostico, tipoHogar, rangoFechaHT, medioAdopcion, rangoFechaAdopcion } = req.body;


    var filterConditions = "";
    var orderBy = "";

    if (filtroPorKeyWord.length && keyword.length) {
        filterConditions += "AND " + hashTable[filtroPorKeyWord] + " LIKE '%" + keyword + "%' ";
    }

    if (ordenar.length) {
        orderBy = "ORDER BY " + hashTable[ordenar] + ";"
    }

    if (rangoEdad.edadInicial.length) {
        filterConditions += "AND ar.Edad >= " + rangoEdad.edadInicial + " ";
    }

    if (rangoEdad.edadFinal.length) {
        filterConditions += "AND ar.Edad <= " + rangoEdad.edadFinal + " ";
    }

    if (genero.length) {
        filterConditions += "AND ar.Genero = '" + genero.toUpperCase() + "' ";
    }

    if (vacunas) {
        filterConditions += hashTable[vacunas.puppy] ? "AND cv.Puppy = '" + vacunas.puppy + "' " : "";
        filterConditions += hashTable[vacunas.refuerzoPuppy] ? "AND cv.RefuerzoPuppy = '" + vacunas.refuerzoPuppy + "' " : "";
        filterConditions += hashTable[vacunas.multiple] ? "AND cv.Multiple = '" + vacunas.multiple + "' " : "";
        filterConditions += hashTable[vacunas.refuerzoMultiple] ? "AND cv.RefuerzoMultiple = '" + vacunas.refuerzoMultiple + "' " : "";
        filterConditions += hashTable[vacunas.rabia] ? "AND cv.Rabia = '" + vacunas.rabia + "' " : "";
    }

    if (esterilizado.length) {
        filterConditions += "AND est.EstaEsterilizado = '" + hashTable[esterilizado.toUpperCase()] + "' ";
    }

    if (diagnostico) {
        filterConditions += hashTable[diagnostico.atropellamiento] ? "AND diag.Atropellamiento = '" + diagnostico.atropellamiento + "' " : "";
        filterConditions += hashTable[diagnostico.tvt] ? "AND diag.TVT = '" + diagnostico.tvt + "' " : "";
        filterConditions += hashTable[diagnostico.sarnaPiel] ? "AND diag.Sarna_Piel = '" + diagnostico.sarnaPiel + "' " : "";
        filterConditions += hashTable[diagnostico.viral] ? "AND diag.Viral = '" + diagnostico.viral + "' " : "";
        filterConditions += hashTable[diagnostico.embarazo] ? "AND diag.Embarazo = '" + diagnostico.embarazo + "' " : "";
        filterConditions += hashTable[diagnostico.cachorros] ? "AND diag.Cachorros = '" + diagnostico.cachorros + "' " : "";
        filterConditions += hashTable[diagnostico.hemoparasitos] ? "AND diag.Hemoparasitos = '" + diagnostico.hemoparasitos + "' " : "";
        filterConditions += hashTable[diagnostico.otro] ? "AND diag.Otro <> ''" : "";
    }

    if (tipoHogar.length) {
        filterConditions += "AND ht.Tipo_HT = '" + tipoHogar.toUpperCase() + "' ";
    }


    if (rangoFechaHT.fechaInicioHT.length) {
        filterConditions += "AND DATE_FORMAT(ht.FechaInicio , '%Y-%m-%d') >= '" + rangoFechaHT.fechaInicioHT + "' ";
    }

    if (rangoFechaHT.fechaFinalHT.length) {
        filterConditions += "AND DATE_FORMAT(ht.FechaFinal , '%Y-%m-%d') <= '" + rangoFechaHT.fechaFinalHT + "' ";
    }


    if (medioAdopcion) {
        var mediosFiltrados = []
        for (let medio in medioAdopcion) {
            if (medioAdopcion[medio] === "1") {
                mediosFiltrados.push("'" + medio + "'")
            }
          }
        filterConditions += mediosFiltrados.length ? "AND adop.Medio in (" + mediosFiltrados.toString() + ") " : "";
    }

    if (rangoFechaAdopcion.fechaInicioAdop.length) {
        filterConditions += "AND DATE_FORMAT(adop.Fecha_Adopcion , '%Y-%m-%d') >= '" + rangoFechaAdopcion.fechaInicioAdop + "' ";
    }

    if (rangoFechaAdopcion.fechaFinalAdop.length) {
        filterConditions += "AND DATE_FORMAT(adop.Fecha_Adopcion , '%Y-%m-%d') <= '" + rangoFechaAdopcion.fechaFinalAdop + "' ";
    }


	db.raw(selectClause[tarjeta] + fromClause + joinConditions + filterConditions + groupBy + orderBy)
		.then((data) => {
			res.json(data[0]);
		})
		.catch((err) => res.status(400).json("error obteniendo consulta" + err));
};

module.exports = {
	handleConsultaPost,
};
