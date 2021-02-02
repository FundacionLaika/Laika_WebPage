import React from "react";
import TarjetaAdopcion from "../Tarjetas/TarjetaAdopcion";

export default class GridAdopcion extends React.Component {
	state = {
		data: []	
	}

	fetchData = () => {
		fetch("http://localhost:3001/consulta", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.props.filtros),
		})
			.then((response) => response.json())
			.then((response) => {
				this.setState({
					data: response,
				});
			})
			.catch((err) => console.log(err));
	}

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.filtros !== prevProps.filtros) {
			this.fetchData();
		}
	}
	
	render() {
		return (
			<div>
				{this.state.data.map((tarjeta) => (
					<TarjetaAdopcion
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						foto={tarjeta.Foto}
						nombreAdte={tarjeta.NombreAdte}
						telefonoAdte={tarjeta.TelefonoAdte}
						adoptado={tarjeta.Adoptado}
						medioAdop={tarjeta.MedioAdop}
						fechaAdop={tarjeta.FechaAdop}
						visitaAdop={tarjeta.VisitaAdop}
						calle={tarjeta.CalleAdte}
						numero={tarjeta.NumeroAdte}
						colonia={tarjeta.ColoniaAdte}
						municipio={tarjeta.MunicipioAdte}
						concatAddress={this.props.concatAddress}
						formatDate={this.props.formatDate}
					/>
				))}
			</div>
		);
	}
}
