import React from "react";
import TarjetaExpedienteMedico from "../Tarjetas/TarjetaExpedienteMedico";

export default class GridExpedienteMedico extends React.Component {
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
					<TarjetaExpedienteMedico
						key={tarjeta.ID_Animal}
						id={tarjeta.ID_Animal}
						foto={tarjeta.Foto}
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
						formatDate={this.props.formatDate}
						openModal={this.props.openModal}
						setID={this.props.setID}
					/>
				))}
			</div>
		);
	}
}
