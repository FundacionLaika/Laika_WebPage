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

module.exports = {
	handleGetRG,
};
