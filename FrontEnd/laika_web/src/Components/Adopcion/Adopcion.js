import React from "react";
import Direccion from "../SharedComponents/Direccion";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Foto from "../SharedComponents/Foto";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";

export default class Adopcion extends React.Component {

    state = {
        visitaDeAdopcion: "",
        adoptante: "",
        adoptado: "",
        telefono: "",
        calle: "",
        numero: "",
        colonia: "",
        municipio: "",
        fechaAdopcion: "",
        medioAdopcion: "",
        dataGrid: [],
        foto: "/iconoPerro.png"
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
    };
    
    addRow = (row) => {
		this.setState((state) => ({
			dataGrid: [row, ...state.dataGrid],
		}));
	};

	deleteRow = (id) => {
		this.setState((state) => ({
			dataGrid: state.dataGrid.filter(
				(row) => row.id !== id
			),
		}));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <DatosGenerales
                    handleChange={this.handleChange}
                    visitaDeAdopcion={this.state.visitaDeAdopcion}
                    adoptante={this.state.adoptante}
                    adoptado={this.state.adoptado}
                    telefono={this.state.telefono}
                    fechaAdopcion={this.state.fechaAdopcion}
                    medioAdopcion={this.state.medioAdopcion}
                />    

                <Direccion
                    handleChange={this.handleChange}
                    calle={this.state.calle}
                    numero={this.state.numero}
                    colonia={this.state.colonia}
                    municipio={this.state.municipio}
                />

                <Foto
                  id="fotoDefault"
                  foto={this.state.foto}
                  imageHandler={this.state.imageHandler}
                />
                
                <DataGrid 
                    rows={this.state.dataGrid}
					addRow={this.addRow}
                    deleteRow={this.deleteRow}
                    handleChange={this.modifyRow}
                />

                <button type="submit">Registrar</button>
            </form>
        );
    }
}