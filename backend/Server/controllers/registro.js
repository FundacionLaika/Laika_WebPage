const handleRegistro = (db) => (req, res) => {
    const { nombre, apellidos, correo, contrasena, rol } = req.body;

    db("USUARIO")
        .insert({
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            contrasena: contrasena,
            rol: rol,
        })
        .then((response) => {
            res.json(response);
        })
        .catch((err) => res.status(400).json("No se pudo registrar"));
};

module.exports = {
    handleRegistro: handleRegistro,
};
