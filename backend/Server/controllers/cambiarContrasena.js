const handleContrasena = (db) => (req, res) => {
    const { correo, contrasena } = req.body;
    db("USUARIO")
        .where("Correo", "=", correo)
        .update({
            Contrasena: contrasena,
            thisKeyIsSkipped: undefined,
        })
        .then(() => {
            console.log(contrasena);
            res.json(contrasena);
        })
        .catch((err) =>
            res.status(400).json("No se pudo cambiar la contraseña")
        );
};

module.exports = {
    handleContrasena: handleContrasena,
};
