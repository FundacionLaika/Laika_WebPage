import React from "react";

export default class Row extends React.Component {
    state = {
        id: this.props.id,
        observaciones: this.props.observaciones,
        accion: this.props.accion,
        fecha: this.props.fecha,
    };

    render() {
        return (
            <div className="flex justify-center">
                <textarea
                    id={this.props.id}
                    type="text"
                    name="observaciones"
                    value={this.props.observaciones}
                    onChange={this.props.handleChange}
                    placeholder="Observaciones"
                />
                <textarea
                    id={this.props.id}
                    type="text"
                    name="accion"
                    value={this.props.accion}
                    onChange={this.props.handleChange}
                    placeholder="Acción"
                />
                <input
                    id={this.props.id}
                    type="date"
                    name="fecha"
                    value={this.props.fecha}
                    onChange={this.props.handleChange}
                    placeholder="Fecha"
                />
                <button onClick={this.props.deleteRow}>-</button>
            </div>
        );
    }
}
