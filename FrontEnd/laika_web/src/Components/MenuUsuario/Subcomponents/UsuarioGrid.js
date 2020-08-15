import React from "react";
import { Link } from "react-router-dom";
import RowUsuario from "./RowUsuario";
import "../Styles/MenuUsuario.css";

export default class UsuarioGrid extends React.Component {
    render() {
        return (
            <div className="DGAArea">
                <div className="agregarDG">
                    <Link to={`/Laika/Registro/${this.props.correoUsuario}`}>
                        <button className="btn btn-4 btn-sep icon-plus">
                            Agregar Usuario
                        </button>
                    </Link>
                </div>
                <div className="headerDG">
                    <div>
                        <label>Nombre</label>
                    </div>

                    <div>
                        <label>Apellido</label>
                    </div>

                    <div>
                        <label>Correo</label>
                    </div>
                    <div>
                        <label>Contraseña</label>
                    </div>

                    <div>
                        <label>Rol</label>
                    </div>
                </div>
                {this.props.data.length > 0
                    ? this.props.data.map((row) => (
                          <RowUsuario
                              className="rowDG"
                              key={row.id}
                              id={row.id}
                              nombre={row.Nombre}
                              apellido={row.Apellidos}
                              correo={row.Correo}
                              cuentaPropia={this.props.cuentaPropia}
                              contrasena={row.Contrasena}
                              rol={row.Rol}
                              handleChange={this.props.modifyRow}
                              deleteRow={() =>
                                  this.props.deleteRow(row.ID_Usuario)
                              }
                          />
                      ))
                    : null}
            </div>
        );
    }
}
