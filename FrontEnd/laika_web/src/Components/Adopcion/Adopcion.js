import React from "react";
import Direccion from "../SharedComponents/Direccion";
import DatosGenerales from "./Subcomponents/DatosGenerales";
import Foto from "../SharedComponents/Foto";
import DataGrid from "../SharedComponents/DataGrid/DataGrid";
import { Link } from "react-router-dom";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import shortid from "shortid";

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
        comentarios: [],
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
    
    addRow = (event) => {
        event.preventDefault();
        const newRow = {id:shortid.generate(), observaciones:"", accion:"", fecha:""};
		this.setState((state) => ({
			comentarios: [newRow, ...state.comentarios],
		}));
    };
    
    deleteRow = (id) => {
		this.setState((state) => ({
			comentarios: state.comentarios.filter(
				(row) => row.id !== id
			),
		}));
	};

    modifyRow = (event) => {

        let dataTemp = this.state.comentarios;

        dataTemp.forEach(element => {
            if (element.id === event.target.id) {
                if (event.target.name === "observaciones") element.observaciones = event.target.value;
                else if (event.target.name === "accion") element.accion = event.target.value;
                else if (event.target.name === "fecha") element.fecha = event.target.value;
            }
            
        });

		this.setState({
			comentarios: dataTemp,
		});
	};
	
	handleRestablecer = () => {
		this.setState({
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
			comentarios: [],
			foto: "/iconoPerro.png"
		});
	};

	imageHandler = (event) => {
		const reader = new FileReader();
		const foto = event.target.id;

		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ [foto]: reader.result });
			}
		};
		console.log(event.target.id);
		reader.readAsDataURL(event.target.files[0]);
	};

	render() {
		return (
			<div>
                <NavBarRegistros/>
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
                      id="foto"
                      foto={this.state.foto}
                      imageHandler={this.imageHandler}
                    />
                
                    <DataGrid 
                        data={this.state.comentarios}
                        modifyRow={this.modifyRow}
                        addRow={this.addRow}
                        deleteRow={this.deleteRow}
                    />

					<button type="submit">Registrar</button>
				</form>
            
				<Link to="/HogarTemporal">
					<button>Hogar Temporal</button>
				</Link>
            
				<button onClick={this.handleRestablecer}>Restablecer</button>
            
				<Link to="/RegistroGeneral">
					<button>Registro General</button>
				</Link>
            
			</div>
		);
	}
}
