import React, { Component } from "react";

class FotoUsuario extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>
                    <img width="60%" className="mw5" src={this.props.foto ? this.props.foto : "/user_new.png"} alt="Foto" />
                </label>

                <input
                    type="file"
                    style={{ display: "none" }}
                    id={this.props.id}
                    name="foto"
                    accept="image/*"
                    onChange={this.props.imageHandler}
                />
            </div>
        );
    }
}

export default FotoUsuario;
