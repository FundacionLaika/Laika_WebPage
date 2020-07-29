const handleCargaUsuario = (db) => (req, res) => {
    const { correo, contrasena } = req.body;
    db.select("*")
        .from("USUARIO")
        .where("Correo", "=", correo)
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

    // .from("USUARIO")
    // .where("Correo", "=", correo)
    // .then((datos) => {
    //     if (contrasena === datos[0].Contrasena) {
    //         return db
    //             .select("*")
    //             .from("USUARIO")
    //             .where("correo", "=", correo)
    //             .then((usuario) => {
    //                 res.json(usuario[0]);
    //             })
    //             .catch((err) =>
    //                 res.status(400).json("No se pudo obtener al usuario")
    //             );
    //     } else {
    //         res.status(400).json("Datos incorrectos");
    //     }
    // })
    // .catch((err) => res.status(400).json(correo));
};

module.exports = {
    handleCargaUsuario,
};
