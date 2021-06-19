const handleGetA = (req, res, db) => {
	db.raw(
		`select ar.ID_Animal as id,
				adte.Nombre AS adoptante,
				adte.Telefono AS telefono,
				adop.NombreAdoptado AS adoptado,
				adop.Medio AS medioAdopcion,
				adop.ID_PETCO AS idPETCO,
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

handleUpdateA = (req, res, db) => {
	const {
		id,
		idPETCO,
		visitaDeAdopcion,
		adoptante,
		adoptado,
		telefono,
		calle,
		numero,
		colonia,
		municipio,
		fechaAdopcion,
		medioAdopcion,
		comentarios,
		foto,
	} = req.body;

	const query = `
	UPDATE 	ADOPCION a,
			ANIMAL_RESCATADO ar,
			ADOPTANTE adte,
			DIRECCION_ADOPTANTE da
	SET 	a.NombreAdoptado = "${adoptado}",
			a.Fecha_Adopcion = "${fechaAdopcion}",
			a.Visita_De_Adopcion = "${visitaDeAdopcion}",
			a.Medio = "${medioAdopcion}",
			a.Foto = ${foto ? '"' + foto + '"' : null},
			a.ID_PETCO = "${idPETCO}",
			adte.Nombre = "${adoptante}",
			adte.Telefono = "${telefono}",
			da.Calle = "${calle}",
			da.Numero = "${numero}",
			da.Colonia = "${colonia}",
			da.Municipio = "${municipio}"
	WHERE 	ar.ID_Animal = a.ID_Animal 
			AND a.ID_Adopcion = adte.ID_Adopcion
			AND adte.ID_Adoptante = da.ID_Adoptante
			AND ar.ID_Animal = "${id}";
	`

	db.raw(query)
		.then(() => {
			db.raw(
				`select ID_Adopcion from ADOPCION where ID_Animal  = "${id}";`
			).then((ID_Adopcion) => {
				ID_Adopcion = ID_Adopcion[0][0].ID_Adopcion;
				db.raw(
					`DELETE FROM COMENTARIOS_ADOPCION 
					WHERE ID_Adopcion  = "${ID_Adopcion}";`
				)
					.then(() => {
						var inserts = [];
						for (let row in comentarios) {
							var insertObj = { ID_Adopcion: ID_Adopcion };
							var currRow = comentarios[row];
							for (col in currRow) {
								if (currRow[col] && col !== "id") {
									insertObj[col] = currRow[col];
								}
							}
							inserts.push(insertObj);
						}

							db.transaction((trx) => {
								trx.insert(inserts)
									.into("COMENTARIOS_ADOPCION")
									.then(trx.commit)
									.catch(() => {
										trx.rollback;
									});
							}).catch((err) => {
								res.status(400).json(
									"unable to add row in comentarios Adopcion"
								);
							});
						
					})
					.catch((err) => {
						res.status(400).json(
							"unable to add row in comentarios Adopcion"
						);
					});
			});
		})
		.then(() => {
			res.status(200).json(
				"update de Adopcion realizado correctamente"
			);
		})
		.catch((err) =>
			res
				.status(400)
				.json(
					"error al realizar el update de Adopcion." + err
				)
		);
};


module.exports = {
	handleGetA,
	handleUpdateA
};
