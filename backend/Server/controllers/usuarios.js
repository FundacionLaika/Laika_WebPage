const handleGetUsuarios = (db) => (req, res) => {
	db.select("*")
		.from("USUARIO")
		.then((user) => {
			if (user.length) {
				res.json(user);
			} else {
				res.status(400).json("No encontrado");
			}
		})
		.catch((err) =>
			res.status(400).json("No se econtraron a los usuarios")
		);
};

const handleGetUsuario = (db) => (req, res) => {
	db.select("*")
		.from("USUARIO")
		.where("ID_Usuario", "=", req.body.ID_Usuario)
		.then((user) => {
			if (user.length) {
				res.json(user[0]);
			} else {
				res.status(400).json("No encontrado");
			}
		})
		.catch((err) =>
			res.status(400).json("No se encontro el usuario especificado")
		);
};

const handleUpdateUsuario = (db, bcrypt) => (req, res) => {
	const {
		ID_Usuario,
		nombre,
		apellidos,
		correo,
		contrasena,
		rol,
		foto,
		telefono,
	} = req.body;


	db.select("CONTRASENA")
		.from("USUARIO")
		.where("ID_Usuario", "=", ID_Usuario)
		.then((ID) => {
			if (!contrasena || ID[0].CONTRASENA === contrasena) {
				db("USUARIO")
					.where("ID_Usuario", "=", ID_Usuario)
					.update({
						nombre,
						apellidos,
						correo,
						rol,
						foto,
						telefono,
					})
					.then(() => {
						res.status(200).json("Update al usuario realizado correctamente");
					})
					.catch((err) =>
						res.status(400).json(err+"No se pudo actualizar el usuario")
					);
			} else {
				const saltRounds = 10;

				bcrypt.genSalt(saltRounds, function (err, salt) {
					bcrypt.hash(contrasena, salt, function (err, hash) {
						db("USUARIO")
							.where("ID_Usuario", "=", ID_Usuario)
							.update({
								contrasena: hash,
								nombre,
								apellidos,
								correo,
								rol,
								foto,
								telefono,
							})
							.then(() => {
								console.log(hash);
								res.status(200).json(
									"Update al usuario realizado correctamente"
								);
							})
							.catch((err) =>
								res
									.status(400)
									.json("No se pudo actualizar el usuario")
							);
					});
				});
			}
		})
		.catch((err) =>
			res.status(400).json(err+"No se encontro el usuario especificado")
		);
};

module.exports = {
	handleGetUsuarios,
	handleGetUsuario,
	handleUpdateUsuario,
};
