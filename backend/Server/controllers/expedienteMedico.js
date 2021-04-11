const handleGetEM = (req, res, db) => {
	db.raw(
		`select  ar.ID_Animal as id,
			ar.Especie as especie,
			diag.Atropellamiento as atropellamiento,
			diag.TVT as tvt, 
			diag.Sarna_Piel as sarnaPiel,
			diag.Viral as viral,
			diag.Embarazo as embarazo, 
			diag.Cachorros as cachorros,
			diag.Hemoparasitos as hemoparasitos, 
			diag.Otro as otroEspecificar,
			CASE WHEN diag.Otro IS NULL OR diag.Otro = ''
				 THEN false
				 ELSE true
	 		END AS otro,
			cv.Vacuna1 as vacuna1,
			cv.Vacuna2 as vacuna2,
			cv.Vacuna3 as vacuna3,
			cv.Vacuna4 as vacuna4,
			cv.Vacuna5 as vacuna5,
			cv.FechaVacuna1 as fechaVacuna1,
			cv.FechaVacuna2 as fechaVacuna2,
			cv.FechaVacuna3 as fechaVacuna3,
			cv.FechaVacuna4 as fechaVacuna4,
			cv.FechaVacuna5 as fechaVacuna5,
			est.Fecha AS fechaEsterilizacion,
			est.CitaAgendada as citaEsterilizacion,
			est.EstaEsterilizado as esterilizado,
			em.Foto1 as foto1,
			em.Foto2 as foto2, 
			em.Foto3 as foto3

		from    ANIMAL_RESCATADO ar,
				EXPEDIENTE_MEDICO em,
				DIAGNOSTICO diag,
				CARTILLA_DE_VACUNACION cv,
				ESTERILIZACION est
		where 	ar.ID_Animal = em.ID_Animal
				AND em.ID_Medico = diag.ID_Medico
				AND em.ID_Medico = est.ID_Medico
				AND em.ID_Medico = cv.ID_Medico ` +
			"AND ar.ID_Animal = '" +
			req.query.id +
			"';"
	)
		.then((data1) => {
			db.raw(
				`SELECT t.ID_Tratamiento as id,
						t.FechaInicio as fechaInicio, 
						t.FechaFinal as fechaFinal, 
						t.Comentarios as comentarios, 
						t.Accion as accion,
						t.Cita_Medica as citaMedica
				FROM 	ANIMAL_RESCATADO ar, 
						EXPEDIENTE_MEDICO em, 
						TRATAMIENTO t
				WHERE 	ar.ID_Animal = em.ID_Animal 
				AND 	em.ID_Medico = t.ID_Medico ` +
					"AND 	ar.ID_Animal = '" +
					req.query.id +
					"';"
			)
				.then((data2) => {
					tratamiento = {
						tratamiento: data2[0],
					};
					res.json({ ...data1[0][0], ...tratamiento });
				})
				.catch((err) =>
					res
						.status(400)
						.json("error obteniendo Registro General" + err)
				);
		})
		.catch((err) =>
			res.status(400).json("error obteniendo Registro General" + err)
		);
};

handleUpdateEM = (req, res, db) => {
	const {
		id,
		atropellamiento,
		tvt,
		sarnaPiel,
		viral,
		embarazo,
		cachorros,
		hemoparasitos,
		otroEspecificar,
		esterilizado,
		citaEsterilizacion,
		fechaEsterilizacion,
		vacuna1,
		vacuna2,
		vacuna3,
		vacuna4,
		vacuna5,
		fechaVacuna1,
		fechaVacuna2,
		fechaVacuna3,
		fechaVacuna4,
		fechaVacuna5,
		foto1,
		foto2,
		foto3,
		tratamiento,
	} = req.body;

	const query = `
	UPDATE 	EXPEDIENTE_MEDICO em,
			ANIMAL_RESCATADO ar,
			CARTILLA_DE_VACUNACION cdv,
			ESTERILIZACION e,
			DIAGNOSTICO d
	SET 	em.Foto1 = ${foto1 ? '"' + foto1 + '"' : null},
			em.Foto2 = ${foto2 ? '"' + foto2 + '"' : null},
			em.Foto3 = ${foto3 ? '"' + foto3 + '"' : null},
			cdv.Vacuna1 = ${vacuna1},
			cdv.Vacuna2 = ${vacuna2},
			cdv.Vacuna3 = ${vacuna3},
			cdv.Vacuna4 = ${vacuna4},
			cdv.Vacuna5 = ${vacuna5},
			cdv.FechaVacuna1 = "${fechaVacuna1}",
			cdv.FechaVacuna2 = "${fechaVacuna2}",
			cdv.FechaVacuna3 = "${fechaVacuna3}",
			cdv.FechaVacuna4 = "${fechaVacuna4}",
			cdv.FechaVacuna5 = "${fechaVacuna5}",
			e.EstaEsterilizado = "${esterilizado}",
			e.CitaAgendada = "${citaEsterilizacion}",
			e.fecha = "${fechaEsterilizacion}",
			d.Atropellamiento = ${atropellamiento},
			d.TVT = ${tvt},
			d.Sarna_Piel = ${sarnaPiel},
			d.Viral = ${viral},
			d.Embarazo = ${embarazo},
			d.Cachorros = ${cachorros},
			d.Hemoparasitos = ${hemoparasitos},
			d.Otro = "${otroEspecificar}"
	WHERE 	ar.ID_Animal = em.ID_Animal
			AND em.ID_Medico = cdv.ID_Medico
			AND em.ID_Medico = e.ID_Medico
			AND em.ID_Medico = d.ID_Medico
			AND ar.ID_Animal = "${id}";
	`;

	db.raw(query)
		.then(() => {
			db.raw(
				`select ID_MEDICO from EXPEDIENTE_MEDICO where ID_Animal  = "${id}";`
			).then((ID_Medico) => {
				ID_Medico = ID_Medico[0][0].ID_MEDICO;
				db.raw(
					`DELETE FROM TRATAMIENTO 
					WHERE ID_Medico  = "${ID_Medico}";`
				)
					.then(() => {

						var inserts = [];
						for (let row in tratamiento) {
							var insertObj = { ID_Medico: ID_Medico };
							var currRow = tratamiento[row];
							for (col in currRow) {
								if (currRow[col] && col !== "id") {
									if (col !== "citaMedica")
										insertObj[col] = currRow[col];
									else
										insertObj["CITA_MEDICA"] = currRow[col];
								}
							}
							inserts.push(insertObj);
						}


							db.transaction((trx) => {
								trx.insert(inserts)
									.into("TRATAMIENTO")
									.then(trx.commit)
									.catch(() => {
										trx.rollback;
									});
							}).catch((err) => {
								res.status(400).json(
									"unable to add row in tratamiento"
								);
							});
						
					})
					.catch((err) => {
						res.status(400).json(
							"unable to add row in tratamiento"
						);
					});
			});
		})
		.then(() => {
			res.status(200).json(
				"update de expediente medico realizado correctamente"
			);
		})
		.catch((err) =>
			res
				.status(400)
				.json(
					"error al realizar el update del expediente medico." + err
				)
		);
};

module.exports = {
	handleGetEM,
	handleUpdateEM,
};
