import React from "react";
import TarjetaAdopcion from "../Tarjetas/TarjetaAdopcion";

export default class GridAdopcion extends React.Component {
	render() {
		return (
			<div>
				{this.props.data.map((tarjeta) => (
					<TarjetaAdopcion
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
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
						concatDate={this.props.concatDate}
					/>
				))}
			</div>
		);
	}
}
