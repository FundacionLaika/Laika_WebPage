import React from "react";
import Foto from "../../SharedComponents/Foto";

export default class InfoUsuario extends React.Component {
    render() {
        return (
            <div>
                <h2 className="f3 b pt3">Información del usuario</h2>

                <div className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <div className="tc">
                        <Foto
                            id="fotoDefault"
                            name="foto"
                            foto={this.props.fotoPerfil}
                            imageHandler={this.props.imageHandler}
                        />
                        <h1 className="f4">
                            {this.props.nombre} {this.props.apellido}
                        </h1>
                        <hr className="mw5 bb bw1 b--black-10" />
                        <div className="tl pl6">
                            <div className="labelD">
                                <label>
                                    <span className="blue">Correo:</span>{" "}
                                    {this.props.correo}
                                </label>
                            </div>
                            <div className="labelD">
                                <label>
                                    <span className="blue">Contraseña:</span>{" "}
                                    {this.props.contrasena}
                                </label>
                            </div>
                            <div className="labelD">
                                <label>
                                    <span className="blue">Rol:</span>{" "}
                                    {this.props.rol}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
