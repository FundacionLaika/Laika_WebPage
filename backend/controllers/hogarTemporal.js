const handleGetHT = (req, res, db) => {
	console.log("id animal", req.query.id);
	db.raw(
		`select  ar.ID_Animal as id, 
			ht.Tipo_HT as tipoHT,
			ht.Responsable AS nombreHT,
			ht.Telefono AS telefonoHT,
			ht.FechaInicio as fechaInicioHT,
			ht.FechaFinal AS fechaFinalHT,
			dirht.Calle AS calle,
			dirht.Numero AS numero,
			dirht.Colonia AS colonia,
			dirht.Municipio AS municipio,
			ht.Foto as foto
		from    ANIMAL_RESCATADO ar,
			HOGAR_TEMPORAL ht,
			DIRECCION_HT dirht
		where   ar.ID_Animal = ht.ID_Animal
				AND ht.ID_HT = dirht.ID_HT
         ` +
			"AND ar.ID_Animal = '" +
			req.query.id +
			"';"
	)
		.then((data1) => {
			console.log("data 1", data1)
			db.raw(
				`SELECT c.ID_Comentarios_HT as id,
						c.Observaciones as observaciones, 
						c.Accion as accion, 
						c.Fecha as fecha
		 		FROM 	ANIMAL_RESCATADO ar, 
			  		 	HOGAR_TEMPORAL ht, 
			  		 	COMENTARIOS_HT c
				WHERE ar.ID_Animal = ht.ID_Animal 
				AND ht.ID_HT = c.ID_HT
				 ` +
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


handleUpdateHT = (req, res, db) => {
	const {
		id,
		tipoHT,
		nombreHT,
		telefonoHT,
		fechaInicioHT,
		fechaFinalHT,
		calle,
		numero,
		colonia,
		municipio,
		foto,
		comentarios
	} = req.body;

	const query = `
	UPDATE HOGAR_TEMPORAL ht,
	     	ANIMAL_RESCATADO ar,
       		DIRECCION_HT dh
	SET 	ht.Tipo_HT = "${tipoHT}",
			ht.Telefono = "${telefonoHT}",
			ht.Responsable = "${nombreHT}",
			ht.FechaInicio = "${fechaInicioHT}",
			ht.FechaFinal = "${fechaFinalHT}",
			ht.Foto = ${foto ? '"' + foto + '"' : null},
			dh.Calle = "${calle}",
			dh.Numero = "${numero}",
			dh.Colonia = "${colonia}",
			dh.Municipio = "${municipio}"
	WHERE 	ar.ID_Animal = ht.ID_Animal
			AND ht.ID_HT = dh.ID_HT
			AND ar.ID_Animal = "${id}";
	`

	db.raw(query)
	.catch(err => console.log(err))
		.then(() => {
			db.raw(
				`select ID_HT from HOGAR_TEMPORAL where ID_Animal  = "${id}";`
			).then((ID_HT) => {
				console.log("idddddd:", id);
				ID_HT = ID_HT[0][0].ID_HT;

				console.log("ID HT", ID_HT);
				db.raw(
					`DELETE FROM COMENTARIOS_HT 
					WHERE ID_HT  = "${ID_HT}";`
				)
					.then(() => {

						var inserts = [];
						for (let row in comentarios) {
							var insertObj = { ID_HT: ID_HT };
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
									.into("COMENTARIOS_HT")
									.then(trx.commit)
									.catch(() => {
										trx.rollback;
									});
							}).catch((err) => {
								res.status(400).json(
									"unable to add row in comentarios HT"
								);
							});
						
					})
					.catch((err) => {
						res.status(400).json(
							"unable to add row in comentarios HT"
						);
					});
			});
		})
		.then(() => {
			res.status(200).json(
				"update de hogar temporal realizado correctamente"
			);
		})
		.catch((err) =>
			res
				.status(400)
				.json(
					"error al realizar el update del hogar temporal." + err
				)
		);
};

module.exports = {
	handleGetHT,
	handleUpdateHT
};
