const handleGetEM = (req, res, db) => {
	db.raw(
		`select  ar.ID_Animal as id,
			diag.Atropellamiento as atropellamiento,
			diag.TVT as tvt, 
			diag.Sarna_Piel as sarnaPiel,
			diag.Viral as viral,
			diag.Embarazo as embarazo, 
			diag.Cachorros as cachorros,
			diag.Hemoparasitos as hemoparasitos, 
			diag.Otro as otroEspecificar,
			CASE WHEN diag.Otro = ''
				 THEN false
				 ELSE true
	 		END AS otro,
			cv.Puppy as puppy,
			cv.RefuerzoPuppy as refuerzoPuppy,
			cv.Multiple as multiple,
			cv.RefuerzoMultiple as refuerzoMultiple,
			cv.Rabia as rabia,
			cv.FechaPuppy as fechaPuppy,
			cv.FechaRefuerzoPuppy as fechaRefuerzoPuppy,
			cv.FechaMultiple as fechaMultiple,
			cv.FechaRefuerzoMultiple as fechaRefuerzoMultiple,
			cv.FechaRabia as fechaRabia,
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
				AND em.ID_Medico = diag.ID_Diagnostico
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
		puppy,
		refuerzoPuppy,
		multiple,
		refuerzoMultiple,
		rabia,
		fechaPuppy,
		fechaRefuerzoPuppy,
		fechaMultiple,
		fechaRefuerzoMultiple,
		fechaRabia,
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
			cdv.Puppy = ${puppy},
			cdv.RefuerzoPuppy = ${refuerzoPuppy},
			cdv.Multiple = ${multiple},
			cdv.RefuerzoMultiple = ${refuerzoMultiple},
			cdv.Rabia = ${rabia},
			cdv.FechaPuppy = "${fechaPuppy}",
			cdv.FechaRefuerzoPuppy = "${fechaRefuerzoPuppy}",
			cdv.FechaMultiple = "${fechaMultiple}",
			cdv.FechaRefuerzoMultiple = "${fechaRefuerzoMultiple}",
			cdv.FechaRabia = "${fechaRabia}",
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
