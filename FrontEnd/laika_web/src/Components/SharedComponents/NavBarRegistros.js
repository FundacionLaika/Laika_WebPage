
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarRegistros extends Component {
	render() {
		return (
			<div>
				<Link to="/RegistroGeneral">
					<button>Registro General</button>
				</Link>
				<Link to="/ExpedienteMedico">
					<button>Expediente Médico</button>
				</Link>
				<Link to="/HogarTemporal">
					<button>Hogar Temporal</button>
				</Link>
				<Link to="/Adopcion">
					<button>Adopción</button>
				</Link>
			</div>
		);
	}
}

export default NavBarRegistros;
