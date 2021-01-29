const handleEliminarUsuario = (db) => (req, res) => {
    const { ID_Usuario } = req.body;
    if (!ID_Usuario) return res.status(400).json("No se especifico el ID del usuario");
    db.select("ID_Usuario")
        .from("USUARIO")
        .where("ID_Usuario", "=", ID_Usuario)
        .del()
        .then(res.json(ID_Usuario))
        .catch((err) => res.status(400).json("No se encontro el usuario"));
};

module.exports = {
    handleEliminarUsuario,
};
