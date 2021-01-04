const handleGetA = (req, res, db) => {
	db.raw(
		`select ar.ID_Animal as id,
				adte.Nombre AS adoptante,
				adte.Telefono AS telefono,
				adop.NombreAdoptado AS adoptado,
				adop.Medio AS medioAdopcion,
				adop.Fecha_Adopcion AS fechaAdopcion,
				adop.Visita_De_Adopcion AS visitaDeAdopcion,
				diradte.Calle AS calle,
				diradte.Numero AS numero,
				diradte.Colonia AS colonia,
				diradte.Municipio AS municipio,
				adop.Foto as foto
											
		from    ANIMAL_RESCATADO ar,
				ADOPCION adop,
				ADOPTANTE adte,
				DIRECCION_ADOPTANTE diradte
										
		where   ar.ID_Animal = adop.ID_Animal
				AND adop.ID_Adopcion = adte.ID_Adopcion
				AND adte.ID_Adoptante = diradte.ID_Adoptante ` +
			"AND ar.ID_Animal = '" +
			req.query.id +
			"';"
	)
		.then((data1) => {
			db.raw(
				`SELECT c.ID_Comentarios_Adop as id,
						c.Observaciones as observaciones, 
						c.Accion as accion, 
						c.Fecha as fecha
				FROM 	ANIMAL_RESCATADO ar, 
						ADOPCION a, 
						COMENTARIOS_ADOPCION c
				WHERE 	ar.ID_Animal = a.ID_Animal 
				AND 	a.ID_Adopcion = c.ID_Adopcion ` +
					"AND 	ar.ID_Animal = '" +
					req.query.id +
					"';"
			)
				.then((data2) => {
					comentarios = {
						comentarios: data2[0],
					};
					res.json({ ...data1[0][0], ...comentarios });
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
	handleGetA,
};
