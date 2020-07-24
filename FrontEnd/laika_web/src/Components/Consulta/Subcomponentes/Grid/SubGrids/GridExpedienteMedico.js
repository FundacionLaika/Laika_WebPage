import React from "react";
import TarjetaExpedienteMedico from "../Tarjetas/TarjetaExpedienteMedico";

export default class GridExpedienteMedico extends React.Component {
	render() {
		return (
			<div>
				{this.props.data.map((tarjeta) => (
					<TarjetaExpedienteMedico
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						atropellamiento={tarjeta.Atropellamiento}
						tvt={tarjeta.TVT}
						sarnaPiel={tarjeta.Sarna_Piel}
						viral={tarjeta.Viral}
						embarazo={tarjeta.Embarazo}
						cachorros={tarjeta.Cachorros}
						hemoparasitos={tarjeta.Hemoparasitos}
						otro={tarjeta.Otro}
						puppy={tarjeta.Puppy}
						refuerzoPuppy={tarjeta.RefuerzoPuppy}
						multiple={tarjeta.Multiple}
						refuerzoMultiple={tarjeta.RefuerzoMultiple}
						rabia={tarjeta.Rabia}
						fechaEsterilizacion={tarjeta.FechaEsterilizacion}
						citaAgendada={tarjeta.CitaAgendada}
						estaEsterilizado={tarjeta.EstaEsterilizado}
					/>
				))}
			</div>
		);
	}
}