import React from "react";

export default class InfoUsuario extends React.Component {
    render() {
        return (
            <div className="item-bmu">
                <div>
                    <div className="pa2">
                        <label className="f4 ph3 labelD">Cambiar Correo</label>
                    </div>
                    <div>
                        <div className="center w-50">
                            <label htmlFor="correoNuevo" className="inp">
                                <input
                                    type="text"
                                    name="correoNuevo"
                                    onChange={this.props.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label w-33">Correo</span>
                                <div className="f6 red">
                                    {this.props.errorCorreo}
                                </div>
                            </label>
                        </div>
                        <div className="center w-50 pt30">
                            <label htmlFor="confirmarCorreo" className="inp">
                                <input
                                    type="text"
                                    name="confirmarCorreo"
                                    onChange={this.props.handleChange}
                                    placeholder="&nbsp;"
                                />
                                <span className="label w-33">Confirmar</span>
                                <div className="f6 red">
                                    {this.props.errorConfirmarCorreo}
                                </div>
                            </label>
                        </div>
                        <button
                            className="f5 pa2 mv3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba"
                            onClick={this.props.onSubmit}
                            name="cambiosCorreo"
                        >
                            Confirmar Correo
                        </button>
                    </div>
                </div>

                <div className="pa2">
                    <label className="f4 ph3 labelD">Cambiar Contrasena</label>
                </div>
                <div>
                    <div className="center w-50">
                        <label htmlFor="Contrasena" className="inp">
                            <input
                                type="text"
                                name="contrasenaNueva"
                                onChange={this.props.handleChange}
                                placeholder="&nbsp;"
                            />
                            <span className="label w-33">Contraseña</span>
                            <div className="f6 red">
                                {this.props.errorContrasena}
                            </div>
                        </label>
                    </div>

                    <div className="center w-50 pt30">
                        <label htmlFor="confirmarContra" className="inp">
                            <input
                                type="text"
                                name="confirmarContrasena"
                                onChange={this.props.handleChange}
                                placeholder="&nbsp;"
                            />
                            <span className="label w-33">Confirmar</span>
                            <div className="f6 red">
                                {this.props.errorConfirmarContrasena}
                            </div>
                        </label>
                    </div>
                    <button
                        onClick={this.props.onSubmit}
                        className="f5 pa2 mv3 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba "
                        name="cambiosContrasena"
                    >
                        Confirmar Contraseñas
                    </button>
                </div>
            </div>
        );
    }
}
