import React, { useState, useEffect } from "react";
import "../Styles/UserCard.css";

import {
    Button,
    Modal,
    Icon,
    Dropdown,
    Header,
    Input,
} from "semantic-ui-react";
import "../Styles/ModalAdmin.css";
import FotoUsuarioModal from "./FotoUsuarioModal";

async function fetchUser(userID) {
    var response = await fetch("https://fundacionlaika.herokuapp.com/usuario", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Usuario: userID }),
    });

    if (response.status !== 200) return null;
    var user = await response.json();

    if (user.Foto) {
        const buffer = Buffer.from(user.Foto.data);
        const foto = buffer.toString("utf8");
        user.Foto = foto;
    }
    return user;
}

async function updateUser(userID, userData, modifyUser) {
    var response = await fetch("https://fundacionlaika.herokuapp.com/usuario", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Usuario: userID, ...userData }),
    });

    if (response.status !== 200) return false;

    modifyUser({ ID_Usuario: userID, ...userData });
    return true;
}

async function createUser(userData, addUser) {
    var response = await fetch("https://fundacionlaika.herokuapp.com/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (response.status !== 200) return false;

    var userID = await response.json();
    userID = userID[0];
    addUser({ ID_Usuario: userID, ...userData });
    return true;
}

function validateData(data) {
    return data ? data : "";
}

function ModalAdmin(props) {
    const [state, setState] = React.useState({
        open: true,
        dimmer: "blurring",
    });

    const { open, dimmer } = state;

    const [secondOpen, setSecondOpen] = React.useState(false);

	const [message, setMessage] = React.useState("");
	
	const [success, setSuccess] = React.useState(true);

   const [stateUser, setStateUser] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        rol: "",
        contrasena: "",
        foto: null,
    });

    function validateEmail(email) {
        const re = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        return re.test(email);
    }

    function handleChange(event) {
        setStateUser({ ...stateUser, [event.target.name]: event.target.value });
    }

    function handleSelect(event, data) {
        setStateUser({ ...stateUser, rol: data.value });
    }

    useEffect(() => {           
        if (!props.userID) return;
        async function fetchData() {
            const userData = await fetchUser(props.userID);
            setStateUser({
                nombre: validateData(userData.Nombre),
                apellidos: validateData(userData.Apellidos),
                correo: validateData(userData.Correo),
                telefono: validateData(userData.Telefono),
                rol: validateData(userData.Rol),
                contrasena: validateData(userData.CONTRASENA),
                foto: userData.Foto,
            });
        }
        fetchData();
    }, [props]);

    const rolesOptions = [
        { key: "Voluntario", value: "Voluntario", text: "Voluntario" },
        { key: "Administrador", value: "Administrador", text: "Administrador" },
    ];

    function handleRestablecer() {
        setStateUser({
            nombre: "",
            apellidos: "",
            correo: "",
            telefono: "",
            rol: "",
            contrasena: "",
            foto: null,
        });
    }

    function imageHandler(event) {
        try {
            const reader = new FileReader();
            const foto = event.target.id;

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setStateUser({ ...stateUser, [foto]: reader.result });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch (error) {}
    }

    return (
        <div>
            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => {
                    props.closeModal();
                    setState({ open: false });
                }}
            >
                <Modal.Header>Resgistrar usuario</Modal.Header>
                <Modal.Content image>
                    <FotoUsuarioModal
                        id="foto"
                        imageHandler={imageHandler}
                        foto={stateUser.foto}
                    />
                    <Modal.Description className="descriptionRG">
                        <Header style={{ marginLeft: "10.5%" }}>
                            Datos de usuario
                        </Header>
                        <div className="containerUserRG">
                            <div className="blockModal">
                                <div className="block1RG">
                                    <Input autoComplete="off"
                                        size="large"
                                        icon="address card"
                                        iconPosition="left"
                                        placeholder="Nombre"
                                        name="nombre"
                                        onChange={handleChange}
                                        value={stateUser.nombre}
                                    />
                                </div>
                                <div className="block2RG">
                                    <Input autoComplete="off"
                                        size="large"
                                        icon="address book"
                                        iconPosition="left"
                                        placeholder="Apellidos"
                                        name="apellidos"
                                        onChange={handleChange}
                                        value={stateUser.apellidos}
                                    />
                                </div>
                            </div>

                            <div className="blockModal">
                                <div className="block1RG">
                                    <Input autoComplete="off"
                                        size="large"
                                        icon="envelope"
                                        iconPosition="left"
                                        placeholder="Correo"
                                        name="correo"
                                        onChange={handleChange}
                                        value={stateUser.correo}
                                    />
                                </div>
                                <div className="block2RG">
                                    <Input autoComplete="off"
                                        size="large"
                                        icon="call"
                                        iconPosition="left"
                                        placeholder="Teléfono"
                                        name="telefono"
                                        onChange={handleChange}
                                        value={stateUser.telefono}
                                    />
                                </div>
                            </div>

                            <div className="blockModal">
                                <div className="block1RG">
                                    <Dropdown
                                        style={{
                                            width: "78.5%",
                                            height: "97%",
                                        }}
                                        button
                                        name="rol"
                                        selection
                                        className="icon selectRol"
                                        labeled
                                        icon="group"
                                        options={rolesOptions}
                                        placeholder="Rol"
                                        onChange={handleSelect}
                                        value={stateUser.rol}
                                    />
                                </div>
                                <div className="block2RG">
                                    <Input autoComplete="off"
                                        size="large"
                                        icon="key"
                                        iconPosition="left"
                                        placeholder="Contraseña"
                                        name="contrasena"
                                        onChange={handleChange}
                                        value={stateUser.contrasena}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        style={{
                            borderRadius: "0.4rem",
                            margin: "0% 2% 0% 0%",
                        }}
                        color="red"
                        inverted
                        onClick={() => {
                            props.closeModal();
                            setState({ open: false });
                            handleRestablecer();
                        }}
                    >
                        <Icon name="cancel" /> Cancelar
                    </Button>

                    <Button
                        style={{
                            borderRadius: "0.4rem",
                            margin: "0% 1% 0% 0%",
                        }}
                        color="green"
                        inverted
                        onClick={async () => {
                            if (
                                stateUser.nombre &&
                                stateUser.apellidos &&
                                stateUser.correo &&
                                stateUser.telefono &&
                                stateUser.rol &&
                                stateUser.contrasena
                            ) {
                                if (!validateEmail(stateUser.correo)) {
                                    setMessage(
                                        "El correo ingresado no es correcto"
                                    );
                                    setSuccess(false);
                                } else {
                                    var success;
                                    if (props.userID) {
                                        success = await  updateUser(
                                            props.userID,
                                            stateUser,
                                            props.modifyUser
                                        );
                                        setSuccess(success);
                                        if (success) {
                                            setMessage(
                                                "Actualizacion de datos del usuario exitosa!"
                                            );
                                        } else {
                                            setMessage(
                                                "Ha ocurrido un error al actualizar el usuario! Verifique que el correo sea unico."
                                            );
                                        }
                                        
                                    } else {
                                        success = await createUser(stateUser, props.addUser);
                                        setSuccess(success);
    
                                        if (success) {
                                            setMessage(
                                                "Se ha creado el usuario de manera exitosa!"
                                            );
                                        } else {
                                            setMessage(
                                                "Ha ocurrido un error al crear el usuario! Verifique que el correo sea unico."
                                            );
                                        }
                                    }
                                }
                            
                                // Funcion de insertar nuevo usuario
                            } else {
                                setMessage(
                                    "Debe llenar todos los campos para que el registro sea exitoso"
								);
								setSuccess(false);
                            }

                            setSecondOpen(true);
                        }}
                    >
                        <Icon name="checkmark" />{" "}
                        {props.userID ? "Guardar" : "Registrar"}
                    </Button>
                </Modal.Actions>
                <Modal
                    onClose={() => setSecondOpen(false)}
                    open={secondOpen}
                    size="small"
                >
                    <Modal.Header>Registro de usuario</Modal.Header>
                    <Modal.Content>
                        <p>{message}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            style={{
                                borderRadius: "0.4rem",
                                margin: "0% 2% 0% 0%",
                            }}
                            color="red"
                            inverted
                            onClick={() => {
								setSecondOpen(false);
								if (success) {
									handleRestablecer();
									setState({open: false});
									props.closeModal();
								}
							}}
                        >
                            <Icon name="cancel" /> Cerrar
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Modal>
        </div>
    );
}

export default ModalAdmin;
