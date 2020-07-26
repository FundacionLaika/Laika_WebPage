const handleRegistro = (db, bcrypt) => (req, res) => {
    const { nombre, apellidos, correo, contrasena, rol, fotoPerfil } = req.body;
    const hash = bcrypt.hashSync(contrasena);

    db("USUARIO")
        .insert({
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contrasena: contrasena,
            rol: "Voluntario",
            // fotoPerfil: "/iconoPerro.png",
        })
        .then((response) => {
            res.json(response);
        })
        .catch((err) => res.status(400).json("No se pudo registrar"));

    // db.transaction((trx) => {
    //     trx.insert({
    //         hash: hash,
    //         correo: correo,
    //     })
    //         .into("USUARIO")
    //         .returning("correo")
    //         .then((correoLogin) => {
    //             return trx("usuarios")
    //                 .returning("*")
    //                 .insert({
    //                     nombre: nombre,
    //                     apellidos: apellidos,
    //                     correo: correoLogin[0],
    //                     contrasena: contrasena,
    //                     rol: rol,
    //                     foto: "Laika2012",
    //                 })
    //                 .then((response) => {
    //                     res.json(response);
    //                 });
    //         })
    //         .then(trx.commit)
    //         .catch(trx.rollback);
    // }).catch((err) => res.status(400).json("No se pudo registrar usuario"));
};

module.exports = {
    handleRegistro: handleRegistro,
};
