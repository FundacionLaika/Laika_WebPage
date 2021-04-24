const handleEliminarAnimal = (db) => (req, res) => {
    const { ID_Animal } = req.body;
    if (!ID_Animal) return res.status(400).json("No se especifico el ID del animal");
    db.select("ID_Animal")
        .from("ANIMAL_RESCATADO")
        .where("ID_Animal", "=", ID_Animal)
        .del()
        .then(res.json(ID_Animal))
        .catch((err) => res.status(400).json("No se encontro el animal"));
};

module.exports = {
    handleEliminarAnimal,
};
