const handleGetHT = (req, res, db) => {
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
				AND ht.ID_HT = dirht.ID_Direccion_HT
         ` +
			"AND ar.ID_Animal = '" +
			req.query.id +
			"';"
	)
		.then((data1) => {
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

module.exports = {
	handleGetHT,
};
