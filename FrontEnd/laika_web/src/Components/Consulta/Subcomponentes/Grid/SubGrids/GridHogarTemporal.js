import React from "react";
import TarjetaHogarTemporal from "../Tarjetas/TarjetaHogarTemporal";

export default class GridHogarTemporal extends React.Component {
	render() {
		return (
			<div>
				{this.props.data.map((tarjeta) => (
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
					/>
				))}
			</div>
		);
	}
}
