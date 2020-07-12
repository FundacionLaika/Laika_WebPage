import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarRegistros extends Component {
	render() {
		return (
			<div>
				<Link to="/Components/RegistroGeneral/RegistroGeneral">
					<button>Registro General</button>
				</Link>
				<Link to="/Components/ExpedienteMedico/ExpedienteMedico">
					<button>Expediente Médico</button>
				</Link>
				<Link to="/Components/HogarTemporal/HogarTemporal">
					<button>Hogar Temporal</button>
				</Link>
				<Link to="/Components/Adopcion/Adopcion">
					<button>Adopción</button>
				</Link>
			</div>
		);
	}
}

export default NavBarRegistros;
