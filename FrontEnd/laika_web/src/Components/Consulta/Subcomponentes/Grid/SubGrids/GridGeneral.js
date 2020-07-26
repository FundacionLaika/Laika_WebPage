import React from "react";
import TarjetaGeneral from "../Tarjetas/TarjetaGeneral";

export default class GridGeneral extends React.Component {
	render() {
		return (
			<div>
				{this.props.data.map((tarjeta) => (
					<TarjetaGeneral
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						nombre={tarjeta.Nombre}
						edad={tarjeta.Edad}
						genero={tarjeta.Genero}
						especie={tarjeta.Especie}
						estatus={tarjeta.Estatus}
						senasParticulares={tarjeta.SenasParticulares}
						fechaRescate={tarjeta.FechaRescate}
						calle={tarjeta.RteCalle}
						numero={tarjeta.RteNumero}
						colonia={tarjeta.RteColonia}
						municipio={tarjeta.RteMunicipio}
						rescatistas={tarjeta.Rescatistas}
						concatDate={this.props.concatDate}
					/>
				))}
			</div>
		);
	}
}
