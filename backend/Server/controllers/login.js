const { json } = require("body-parser");

const handleLogin = (db, bcrypt) => (req, res) => {
    const { correo, contrasena } = req.body;
    console.log(req.body);
    console.log(contrasena);

    db.raw(`SELECT CONTRASENA FROM USUARIO WHERE CORREO = '${correo}'`)
    .then((userData) => {
        userData = userData[0][0];
        console.log(userData);
        if (contrasena === userData.CONTRASENA)  res.status(200).json("Inicio de sesión exitoso"); 
        else res.status(404).json("Contraseña inválida");
    })
    .catch((err) => res.status(404).json("Error al obtener los datos. Verifique el correo ingresado"));
};

module.exports = {
    handleLogin: handleLogin,
};
