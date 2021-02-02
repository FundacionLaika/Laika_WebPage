const handleLogin = (db, bcrypt) => (req, res) => {
	const { correo, contrasena } = req.body;

	if (!correo || !contrasena) {
		return res.status(400).json("Faltan campos requeridos");
	}

	db.raw(
		`SELECT ID_USUARIO, CONTRASENA FROM USUARIO WHERE CORREO = '${correo}'`
	)
		.then((userData) => {
			userData = userData[0][0];
			bcrypt.compare(
				contrasena,
				userData.CONTRASENA,
				function (err, result) {
					if (result)
						res.status(200).json({
							ID_Usuario: userData.ID_USUARIO,
						});
					else res.status(404).json("Contraseña inválida");
				}
			);
		})
		.catch((err) =>
			res
				.status(404)
				.json(
					"Error al obtener los datos. Verifique el correo ingresado"
				)
		);
};

module.exports = {
	handleLogin: handleLogin,
};
