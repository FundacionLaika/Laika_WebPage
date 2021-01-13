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
		"AND ar.ID_Animal = '" + req.query.id + "';"
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

const handleUpdateEM = (req, res, db) => {
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
		"AND ar.ID_Animal = '" + req.query.id + "';"
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

module.exports = {
	handleGetEM,
	handleUpdateEM,
};
