const handleSignUp = (db, bcrypt) => (req, res) => {
	const {
		nombre,
		apellidos,
		correo,
		contrasena,
		rol,
		foto,
		telefono,
	} = req.body;

	if (!nombre || !apellidos || !correo || !contrasena || !rol) {
		return res.status(400).json("Campos obligatorios incompletos.");
	}
	const saltRounds = 10;

	bcrypt.genSalt(saltRounds, function (err, salt) {
		bcrypt.hash(contrasena, salt, function (err, hash) {
			db("USUARIO")
				.insert({
					nombre,
					apellidos,
					correo,
					contrasena: hash,
					foto,
					rol,
					telefono,
				})
				.then((response) => {
					res.status(200).json(response);
				})
				.catch((err) =>
					res.status(400).json(err + " .No se pudo registrar")
				);
		});
	});
};

module.exports = {
	handleSignUp,
};
