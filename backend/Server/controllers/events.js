const handleGetEvents = (db) => (req, res) => {
    
    const query = `
        select 	ar.ID_Animal,
                ar.Nombre,
                ar.Especie,
                rte.Fecha AS FechaRescate,
                est.Fecha AS FechaEsterilizacion,
                cv.FechaVacuna1,
                cv.FechaVacuna2,
                cv.FechaVacuna3,
                cv.FechaVacuna3,
                cv.FechaVacuna4,
                cv.FechaVacuna5,
                GROUP_CONCAT(DISTINCT trat.Cita_Medica separator ', ') AS CitasMedicas,
                GROUP_CONCAT(DISTINCT trat.FechaInicio separator ', ') AS IniciosDeTratamiento,
                GROUP_CONCAT(DISTINCT trat.FechaFinal separator ', ') AS FinesDeTratamiento,
                ht.FechaInicio AS FechaInicioHT,
                ht.FechaFinal AS FechaFinalHT,
                adop.Visita_De_Adopcion AS VisitaAdopcion,
                adop.Fecha_Adopcion AS FechaAdopcion
                
        from    ANIMAL_RESCATADO ar,
                RESCATISTA rta,
                RESCATE rte,
                DIRECCION_RESCATE dirrte,
                EXPEDIENTE_MEDICO em left join TRATAMIENTO trat ON em.ID_Medico = trat.ID_Medico,
                DIAGNOSTICO diag,
                CARTILLA_DE_VACUNACION cv,
                ESTERILIZACION est,
                HOGAR_TEMPORAL ht,
                DIRECCION_HT dirht,
                ADOPCION adop,
                ADOPTANTE adte,
                DIRECCION_ADOPTANTE diradte

        where ar.ID_Animal = rta.ID_Animal
                AND ar.ID_Animal = rte.ID_Animal
                AND rte.ID_RESCATE = dirrte.ID_Rescate
                AND ar.ID_Animal = em.ID_Animal
                AND em.ID_Medico = diag.ID_Medico
                AND em.ID_Medico = est.ID_Medico
                AND em.ID_Medico = cv.ID_Medico
                AND ar.ID_Animal = ht.ID_Animal
                AND ht.ID_HT = dirht.ID_HT
                AND ar.ID_Animal = adop.ID_Animal
                AND adop.ID_Adopcion = adte.ID_Adopcion
                AND adte.ID_Adoptante = diradte.ID_Adoptante 
                
        group by ar.ID_Animal;
    `;

    db.raw(query)
        .then((data) => {
            res.json(data[0]);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("error obteniendo eventos");
        });

};

module.exports = {
    handleGetEvents,
};
