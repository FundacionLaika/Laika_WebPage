const handleCorreo = (db) => (req, res) => {
    const { correo, correoNuevo } = req.body;
    console.log(correo);
    db("USUARIO")
        .where("Correo", "=", correo)
        .update({
            Correo: correoNuevo,
            thisKeyIsSkipped: undefined,
        })
        .then(() => {
            console.log(correoNuevo);
            res.json(correoNuevo);
        })
        .catch((err) => res.status(400).json("No se pudo cambiar el correo"));
};

module.exports = {
    handleCorreo: handleCorreo,
};
