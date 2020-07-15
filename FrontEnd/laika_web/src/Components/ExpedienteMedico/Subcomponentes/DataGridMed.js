import React from "react";
import RowMed from "./RowMed";

export default class DataGridMed extends React.Component {
    render() {
        return (
            <div className="pt2">
                <button
                    className="f5 pa2 br3 bw1 b--blue pointer hover-bg-blue hover-white b ba "
                    onClick={this.props.addRow}
                >
                    Agregar
                </button>
                <div className="flex justify-center center w-80">
                    <label className="fl w-20">Fecha Inicio</label>
                    <label className="fl w-20">Fecha Final</label>
                    <label className="fl w-20">Comentarios</label>
                    <label className="fl w-20">Acción</label>
                    <label className="fl w-20">Cita médica</label>
                </div>
                {this.props.data.map((row) => (
                    <RowMed
                        key={row.id}
                        id={row.id}
                        fechaInicio={row.fechaInicio}
                        fechaFinal={row.fechaFinal}
                        comentarios={row.comentarios}
                        accion={row.accion}
                        citaMedica={row.citaMedica}
                        handleChange={this.props.modifyRow}
                        deleteRow={() => this.props.deleteRow(row.id)}
                    />
                ))}
            </div>
        );
    }
}
