import React from "react";
import Row from "./Row"
import shortid from "shortid";

export default class DataGrid extends React.Component {
	state = {
        data: [{id:"123", observaciones:"observaciones de prueba", accion:"accion de prueba", fecha:"2000-03-17"}]
    }
    
    handleChange = (event) => {

        let dataTemp = this.state.data;

        dataTemp.forEach(element => {
            if (element.id === event.target.id) {
                if (event.target.name === "observaciones") element.observaciones = event.target.value;
                else if (event.target.name === "accion") element.accion = event.target.value;
                else if (event.target.name === "fecha") element.fecha = event.target.value;
            }
            
        });

		this.setState({
			data: dataTemp,
		});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    

    addRow = () => {
        const newRow = {id:shortid.generate(), observaciones:"", accion:"", fecha:""};
		this.setState((state) => ({
			data: [newRow, ...state.data],
		}));
    };
    
    deleteRow = (id) => {
		this.setState((state) => ({
			data: state.data.filter(
				(row) => row.id !== id
			),
		}));
    };


	render() {
		return (
            <div onSubmit={this.handleSubmit}>

                <button onClick={this.addRow}>Agregar</button>
                {this.state.data.map(row => (
                    <Row key={row.id}
                        id={row.id}
                        observaciones={row.observaciones}
                        accion={row.accion}
                        fecha={row.fecha}
                        handleChange={this.handleChange}
                        deleteRow={() => this.deleteRow(row.id)}
                    />
                ))}
                <button onClick={this.handleSubmit}>Guardar</button>
			</div>	
		);
	}
}

