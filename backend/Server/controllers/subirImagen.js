const handleImagenPerfil = (db, fs) => (req, res) => {
    let { correo } = req.body;
    foto = req.file;
    console.log("foto: ", foto);
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString("base64");
    const finalImg = {
        contentType: req.file.mimetype,
        image: encode_image,
    };
    console.log("foto: ", foto);
    console.log("finalImg: ", finalImg);

    db("USUARIO")
        .where("Correo", "=", correo)
        .update({
            Foto: img,
            thisKeyIsSkipped: undefined,
        })
        .then(() => {
            res.json(foto);
        })
        .catch((err) =>
            res.status(400).json("No se pudo cargar la imagen del usuario")
        );
};

const handleImagenMedico = (db) => (req, res) => {
    const { imagen } = req.body;
    console.log(imagen);
    db("USUARIO")
        .where("Correo", "=", imagen)
        .update({
            Foto: imagen,
            thisKeyIsSkipped: undefined,
        })
        .then(() => {
            console.log(imagen);
            res.json(imagen);
        })
        .catch((err) => res.status(400).json("Soy imagen del med"));
};

const handleImagenRegistro = (db) => (req, res) => {
    const { imagen } = req.body;
    console.log(imagen);
    db("USUARIO")
        .where("Correo", "=", imagen)
        // .update({
        //     Correo: imagen,
        //     thisKeyIsSkipped: undefined,
        // })
        .then(() => {
            console.log(imagen);
            res.json(imagen);
        })
        .catch((err) => res.status(400).json("Soy imagen del Registro"));
};

const handleImagenHogar = (db) => (req, res) => {
    const { imagen, correo } = req.body;
    console.log(imagen, " ", correo);
    db("USUARIO")
        .where("Correo", "=", correo)
        .update({
            Foto: imagen,
            thisKeyIsSkipped: undefined,
        })
        .then(() => {
            // console.log(imagen);
            res.json(imagen);
        })
        .catch((err) => res.status(400).json("Soy imagen del Hogar"));
};

const handleImagenAdopcion = (db) => (req, res) => {
    const { imagen } = req.body;
    console.log(imagen);
    db("USUARIO")
        .where("Foto", "=", imagen)
        // .update({
        //     Correo: imagen,
        //     thisKeyIsSkipped: undefined,
        // })
        .then(() => {
            console.log(imagen);
            res.json(imagen);
        })
        .catch((err) => res.status(400).json("Soy imagen de Adop"));
};

const handleUpload = (db) => (req, res) => {
   
}

module.exports = {
    handleImagenPerfil: handleImagenPerfil,
    handleImagenRegistro: handleImagenRegistro,
    handleImagenMedico: handleImagenMedico,
    handleImagenHogar: handleImagenHogar,
    handleImagenAdopcion: handleImagenAdopcion,
};
