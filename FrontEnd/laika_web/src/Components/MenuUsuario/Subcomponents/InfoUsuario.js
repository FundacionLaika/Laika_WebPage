import React from "react";
import Foto from "../../SharedComponents/Foto";

export default class InfoUsuario extends React.Component {
    render() {
        return (
            <div>
                <h2 className="f4 b">Información del usuario</h2>
                <Foto
                    id="fotoDefault"
                    name="foto"
                    foto={this.props.fotoPerfil}
                    imageHandler={this.props.imageHandler}
                />
                <div className="pa3 flex justify-center flex-column">
                    <div className="labelD">
                        <label>Nombre: {this.props.nombre}</label>
                    </div>
                    <br />
                    <div className="labelD">
                        <label>Apellido: {this.props.apellido}</label>
                    </div>
                    <br />
                    <div className="labelD">
                        <label>Correo: {this.props.correo}</label>
                    </div>
                    <br />
                    <div className="labelD">
                        <label>Contraseña: {this.props.contrasena}</label>
                    </div>
                    <br />
                    <div className="labelD">
                        <label>Rol: {this.props.rol}</label>
                    </div>
                </div>
            </div>
        );
    }
}
