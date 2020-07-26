const { json } = require("body-parser");

const handleLogin = (db, bcrypt) => (req, res) => {
    const { correo, contrasena } = req.body;
    db.select("Correo", "Contrasena")
        .from("USUARIO")
        .where("Correo", "=", correo)
        .then((datos) => {
            if (contrasena === datos[0].Contrasena) {
                return db
                    .select("*")
                    .from("USUARIO")
                    .where("correo", "=", correo)
                    .then((usuario) => {
                        res.json(usuario[0]);
                    })
                    .catch((err) =>
                        res.status(400).json("No se pudo obtener al usuario")
                    );
            } else {
                res.status(400).json("Datos incorrectos");
            }
        })
        .catch((err) => res.status(400).json(correo));
};

module.exports = {
    handleLogin: handleLogin,
};
