import React, { Component } from "react";

class Foto extends Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>
                    <img className="mw5" src={this.props.foto} alt="Foto" />
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

export default Foto;
