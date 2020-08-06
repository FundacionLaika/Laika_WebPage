import React from "react";
import TarjetaHogarTemporal from "../Tarjetas/TarjetaHogarTemporal";

export default class GridHogarTemporal extends React.Component {
	state = {
		data: []
	}
	
	componentDidMount() {
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

	render() {
		return (
			<div>
				{this.state.data.map((tarjeta) => (
					<TarjetaHogarTemporal
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						tipoHT={tarjeta.Tipo_HT}
						responsableHT={tarjeta.ResponsableHT}
						telefonoHT={tarjeta.TelefonoHT}
						fechaInicioHT={tarjeta.FechaInicioHT}
						fechaFinalHT={tarjeta.FechaFinalHT}
						calle={tarjeta.CalleHT}
						numero={tarjeta.NumeroHT}
						colonia={tarjeta.ColoniaHT}
						municipio={tarjeta.MunicipioHT}
						concatDate={this.props.concatDate}
						formatDate={this.props.formatDate}
					/>
				))}
			</div>
		);
	}
}
