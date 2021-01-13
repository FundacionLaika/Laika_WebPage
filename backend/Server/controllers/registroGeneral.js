const handleGetRG = (req, res, db) => {
	db.raw(
		`select    ar.ID_Animal AS id,
                    ar.Nombre AS nombre,
                    ar.Edad AS edad,
                    ar.Genero AS genero,
                    ar.Especie AS especie,
                    ar.Estatus AS estatus,
                    ar.SenasParticulares AS senasParticulares,
                    rte.Fecha AS fechaDeRescate,
                    dirrte.Calle AS calle,
                    dirrte.Numero AS numero,
                    dirrte.Colonia AS colonia,
                    dirrte.Municipio AS municipio,
                    ar.Foto AS foto
        from   	    ANIMAL_RESCATADO ar,
                    RESCATE rte,
                    DIRECCION_RESCATE dirrte
        
        where       ar.ID_Animal = rte.ID_Animal 
		AND         rte.ID_RESCATE = dirrte.ID_Rescate ` +
			"AND ar.ID_Animal = '" +
			req.query.id +
			"';"
	)
		.then((data1) => {
			db.raw(
				`SELECT r.ID_Rescatista AS id, 
						r.Nombre AS text
				 FROM 	ANIMAL_RESCATADO ar, 
						   RESCATISTA r
				 WHERE 	ar.ID_Animal = r.ID_Animal ` +
					"AND 	ar.ID_Animal = '" +
					req.query.id +
					"';"
			)
				.then((data2) => {
					rescatistas = {
						rescatistas: data2[0],
					};
					res.json({ ...data1[0][0], ...rescatistas });
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

const handlePostRG = (req, res, db) => {
	const {
		nombre,
		edad,
		genero,
		especie,
		fechaDeRescate,
		estatus,
		calle,
		numero,
		colonia,
		municipio,
		senasParticulares,
		foto,
	} = req.body;

	db.transaction((trx) => {
		trx.insert({
			NOMBRE: nombre,
			EDAD: edad,
			GENERO: genero,
			ESPECIE: especie,
			SENASPARTICULARES: senasParticulares,
			ESTATUS: estatus,
			FOTO: foto,
		})
			.into("ANIMAL_RESCATADO")
			.returning("ID_Animal")
			.then((id) => {
				return trx("users")
					.returning("*")
					.insert({
						email: loginEmail[0],
						name: name,
						joined: new Date(),
					})
					.then((user) => {
						res.json(user[0]);
					});
			})
			.then(trx.commit)
			.catch(trx.rollback);
	}).catch((err) => res.status(400).json("unable to register"));
};

handleUpdateRG = (req, res, db) => {
	console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaa");
	const {
		id,
		nombre,
		edad,
		genero,
		especie,
		fechaDeRescate,
		estatus,
		calle,
		numero,
		colonia,
		municipio,
		senasParticulares,
		foto,
		rescatistas,
	} = req.body;

	const query = `
		UPDATE 	ANIMAL_RESCATADO ar,
				RESCATE r,
				DIRECCION_RESCATE dr
		SET ar.Nombre = "${nombre}",
			ar.Edad = "${edad}",
			ar.Genero = "${genero}",
			ar.Especie = "${especie}",
			ar.SenasParticulares = "${senasParticulares}",
			ar.Estatus = "${estatus}",
			ar.Foto = ${foto ? '"' + foto + '"' : null},
			r.Fecha = "${fechaDeRescate}",
			dr.Calle = "${calle}",
			dr.Numero = "${numero}",
			dr.Colonia = "${colonia}",
			dr.Municipio = "${municipio}"
		WHERE ar.ID_Animal = r.ID_Animal
		AND r.ID_Rescate = dr.ID_Rescate
		AND ar.ID_Animal = "${id}";
	`;

	console.log(rescatistas);

	db.raw(query)
		.then(() => {
			db.raw(`DELETE FROM RESCATISTA WHERE ID_Animal = "${id}";`).then(
				() => {
					for (let rescatista in rescatistas) {
						db.transaction((trx) => {
							trx.insert({
								Nombre: rescatistas[rescatista]["text"],
								Id_Animal: id,
							})
								.into("RESCATISTA")
								.then(trx.commit)
								.catch(trx.rollback);
						}).catch((err) => res.status(400).json("unable to add rescatista"));
						
					}
				}
			);
		})
		.then(() => {
			res.status(200).json(
				"update de registro general realizado correctamente"
			);
		})
		.catch((err) =>
			res
				.status(400)
				.json("error al realizar el update a registro general." + err)
		);
};

module.exports = {
	handleGetRG,
	handlePostRG,
	handleUpdateRG,
};
