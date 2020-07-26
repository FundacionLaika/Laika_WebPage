const { json } = require("body-parser");

const handleLogin = (db, bcrypt) => (req, res) => {
    const { correo, contrasena } = req.body;
    db.select("Contrasena")
        .from("USUARIO")
        .where("Correo", "=", correo)
        .then((contra) => {
            // console.log(usuario);
            // console.log(usuario[]);
            // console.log(contrasena);
            // const esValido = bcrypt.compareSync(contrasena, datos[0]);
            // const esValido = usuario === contrasena;
            res.json(contra);

            usuario === contrasena
                ? console.log("Hurray!")
                : console.log("Oh Fuck :(");
            console.log(esValido);
            if (esValido) {
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

        // db.select("correo", "hash")
        //     .from("USUARIO")
        //     .where("correo", "=", correo)
        //     .then((datos) => {
        //         const esValido = contrasena === "bye";
        //         console.log("hey");
        //         const esValido = bcrypt.compareSync(contrasena, datos[0]);
        //         if (esValido) {
        //             return db
        //                 .select("*")
        //                 .from("USUARIO")
        //                 .where("correo", "=", correo)
        //                 .then((usuario) => {
        //                     res.json(usuario[0]);
        //                 })
        //                 .catch((err) =>
        //                     res.status(400).json("No se pudo obtener al usuario")
        //                 );
        //         } else {
        //             res.status(400).json("Datos incorrectos");
        //         }
        //     })

        .catch((err) => res.status(400).json(correo));
};

module.exports = {
    handleLogin: handleLogin,
};
