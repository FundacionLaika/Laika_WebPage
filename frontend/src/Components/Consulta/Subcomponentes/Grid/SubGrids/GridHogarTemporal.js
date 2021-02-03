import React from "react";
import TarjetaHogarTemporal from "../Tarjetas/TarjetaHogarTemporal";

export default class GridHogarTemporal extends React.Component {
	state = {
		data: [],
	};

	fetchData = () => {
		fetch("http://localhost:3001/consulta", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.props.filtros),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);

				this.setState({
					data: response,
				});
			})
			.catch((err) => console.log(err));
	};

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
					<TarjetaHogarTemporal
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						foto={tarjeta.Foto}
						tipoHT={tarjeta.Tipo_HT}
						responsableHT={tarjeta.ResponsableHT}
						telefonoHT={tarjeta.TelefonoHT}
						fechaInicioHT={tarjeta.FechaInicioHT}
						fechaFinalHT={tarjeta.FechaFinalHT}
						calle={tarjeta.CalleHT}
						numero={tarjeta.NumeroHT}
						colonia={tarjeta.ColoniaHT}
						municipio={tarjeta.MunicipioHT}
						concatAddress={this.props.concatAddress}
						formatDate={this.props.formatDate}
						openModal={this.props.openModal}
						setID={this.props.setID}
					/>
				))}
			</div>
		);
	}
}
