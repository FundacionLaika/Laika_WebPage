const handleUsuariosGet = (db) => (req, res) => {
    db.select("*")
        .from("USUARIO")
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
};

module.exports = {
    handleUsuariosGet,
};
