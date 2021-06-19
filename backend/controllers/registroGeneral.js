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
		estatus,
		senasParticulares,
		foto,
		fechaDeRescate,
		calle,
		numero,
		colonia,
		municipio,
		rescatistas,
	} = req.body;

	var ids = {
		ID_Animal: -1,
		ID_Medico: -1,
		ID_HT: -1,
		ID_Adopcion: -1,
	};

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
				id = id[0];
				ids.ID_Animal = id;
				return trx
					.insert({
						Id_Animal: id,
						Fecha: fechaDeRescate,
					})
					.into("RESCATE")
					.returning("ID_Rescate")
					.then((id_rescate) => {
						id_rescate = id_rescate[0];
						return trx
							.insert({
								Id_Rescate: id_rescate,
								Calle: calle,
								Numero: numero,
								Colonia: colonia,
								Municipio: municipio,
							})
							.into("DIRECCION_RESCATE")
							.returning("ID_Direccion_Rescate")
							.then((id_dir_res) => {
								console.log("id direccion", id_dir_res[0]);
								for (let rescatista in rescatistas) {
									db.transaction((trx) => {
										trx.insert({
											Nombre:
												rescatistas[rescatista]["text"],
											Id_Animal: id,
										})
											.into("RESCATISTA")
											.then(trx.commit)
											.catch(trx.rollback);
									}).catch((err) =>
										res
											.status(400)
											.json("unable to add rescatista")
									);
								}
							})
							.then(() => {
								return trx
									.insert({
										Id_Animal: ids.ID_Animal,
									})
									.into("EXPEDIENTE_MEDICO")
									.returning("ID_Medico")
									.then((id_medico) => {
										id_medico = id_medico[0];
										ids.ID_Medico = id_medico;
										console.log(
											"Id medico:",
											ids.ID_Medico
										);
										return trx
											.insert({
												Id_Medico: ids.ID_Medico,
											})
											.into("CARTILLA_DE_VACUNACION")
											.then(() => {
												return trx
													.insert({
														Id_Medico:
															ids.ID_Medico,
													})
													.into("ESTERILIZACION")

													.then(() => {
														return trx
															.insert({
																Id_Medico:
																	ids.ID_Medico,
															})
															.into("DIAGNOSTICO")
															.then(() => {
																return trx
																	.insert({
																		Id_Animal:
																			ids.ID_Animal,
																		NombreAdoptado:
																			"",
																		Fecha_Adopcion:
																			"",
																		Medio:
																			"",
																	})
																	.into(
																		"ADOPCION"
																	)
																	.returning(
																		"ID_Adopcion"
																	)
																	.catch(
																		(err) =>
																			console.log(
																				err
																			)
																	)
																	.then(
																		(
																			id_adopcion
																		) => {
																			id_adopcion =
																				id_adopcion[0];
																			ids.ID_Adopcion = id_adopcion;

																			return trx
																				.insert(
																					{
																						Id_Adopcion:
																							ids.ID_Adopcion,
																						Nombre:
																							"",
																						Telefono:
																							"",
																					}
																				)
																				.into(
																					"ADOPTANTE"
																				)
																				.returning(
																					"ID_Adoptante"
																				)
																				.catch(
																					(
																						err
																					) =>
																						console.log(
																							err
																						)
																				)
																				.then(
																					(
																						id_adoptante
																					) => {
																						id_adoptante =
																							id_adoptante[0];
																						console.log(
																							id_adoptante
																						);
																						return trx
																							.insert(
																								{
																									Id_Adoptante: id_adoptante,
																									Municipio:
																										"",
																								}
																							)
																							.into(
																								"DIRECCION_ADOPTANTE"
																							)
																							.catch(
																								(
																									err
																								) =>
																									console.log(
																										err
																									)
																							)

																							.then(
																								() => {
																									return trx
																										.insert(
																											{
																												Id_Animal:
																													ids.ID_Animal,
																												Tipo_HT:
																													"",
																												Telefono:
																													"",
																												Responsable:
																													"",
																												FechaInicio:
																													"",
																												FechaFinal:
																													"",
																											}
																										)
																										.into(
																											"HOGAR_TEMPORAL"
																										)
																										.returning(
																											"ID_HT"
																										)
																										.catch(
																											(
																												err
																											) =>
																												console.log(
																													err
																												)
																										)
																										.then(
																											(
																												id_ht
																											) => {
																												id_ht =
																													id_ht[0];
																												ids.ID_HT = id_ht;
																												return trx
																													.insert(
																														{
																															Id_HT:
																																ids.ID_HT,
																															Municipio:
																																"",
																														}
																													)
																													.into(
																														"DIRECCION_HT"
																													)
																													.then(
																														() => {
																															console.log(
																																"post finalizado"
																															);
																														}
																													)
																													.catch(
																														(
																															err
																														) =>
																															console.log(
																																err
																															)
																													);
																											}
																										);
																								}
																							);
																					}
																				);
																		}
																	);
															});
													});
											});
									});
							});
					})

					.catch(trx.rollback);
			})
			.then(trx.commit)
			.then(() => {
				console.log("post EXITOSO");
				res.status(200).json(
					ids.ID_Animal
				);
			})
			.catch(trx.rollback);
	}).catch((err) => res.status(400).json("unable to register"));
};

handleUpdateRG = (req, res, db) => {
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
		SET 	ar.Nombre = "${nombre}",
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
		WHERE 	ar.ID_Animal = r.ID_Animal
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
						}).catch((err) =>
							res.status(400).json("unable to add rescatista")
						);
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
