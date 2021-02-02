const handleChangePassword = (db, bcrypt) => (req, res) => {
	const { ID_Usuario, contrasena } = req.body;

	if (!ID_Usuario || !contrasena) {
		return res.status(400).json("Campos obligatorios incompletos.");
	}
	const saltRounds = 10;

	bcrypt.genSalt(saltRounds, function (err, salt) {
		bcrypt.hash(contrasena, salt, function (err, hash) {
			db("USUARIO")
				.where("ID_Usuario", "=", ID_Usuario)
				.update({
					contrasena: hash,
				})
				.then(() => {
					res.status(200).json("Contrasena cambiada");
				})
				.catch((err) =>
					res.status(400).json("No se pudo cambiar la contraseña")
				);
		});
	});
};

module.exports = {
	handleChangePassword,
};
