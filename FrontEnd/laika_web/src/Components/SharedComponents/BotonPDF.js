import React, { useState } from "react";
import "./Styles/BotonPDF.css";
import {
	Button,
	Modal,
	Icon,
	Image,
	Header,
	Checkbox,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

var datosGenerales = false,
	expedienteMedico = false,
	hogarTemporal = false,
	adopcion = false;
var url;

function Reducer(state, action) {
	switch (action.type) {
		case "OPEN_MODAL":
			return { open: true, dimmer: action.dimmer, size: action.size };
		case "CLOSE_MODAL":
			return { open: false };
		default:
			throw new Error();
	}
}

function BotonPDF() {
	url =
		"/PDF/?id=" +
		this.props.id +
		"&datosGenerales=" +
		datosGenerales +
		"&expedienteMedico=" +
		expedienteMedico +
		"&hogarTemporal=" +
		hogarTemporal +
		"&adopcion=" +
		adopcion;

	const [state, dispatch] = React.useReducer(Reducer, {
		open: false,
		dimmer: undefined,
	});
	const { open, dimmer } = state;

	const [secondOpen, setSecondOpen] = React.useState(false);

	const [stateCheck, setCheckbox] = useState({
		seleccionarTodo: false,
		datosGenerales: false,
		expedienteMedico: false,
		hogarTemporal: false,
		adopcion: false,
	});

	const handleChange = (event) => {
		if (event.name === "seleccionarTodo") {
			setCheckbox({
				seleccionarTodo: !event.value,
				datosGenerales: !event.value,
				expedienteMedico: !event.value,
				hogarTemporal: !event.value,
				adopcion: !event.value,
			});
			datosGenerales = !event.value;
			expedienteMedico = !event.value;
			hogarTemporal = !event.value;
			adopcion = !event.value;
		} else {
			setCheckbox({
				...stateCheck,
				[event.name]: !event.value,
			});
			if (event.name === "datosGenerales") {
				datosGenerales = !event.value;
			} else if (event.name === "expedienteMedico") {
				expedienteMedico = !event.value;
			} else if (event.name === "hogarTemporal") {
				hogarTemporal = !event.value;
			} else if (event.name === "adopcion") {
				adopcion = !event.value;
			}
		}
	};

	const handleRestablecer = () => {
		setCheckbox({
			seleccionarTodo: false,
			datosGenerales: false,
			expedienteMedico: false,
			hogarTemporal: false,
			adopcion: false,
		});
		datosGenerales = false;
		expedienteMedico = false;
		hogarTemporal = false;
		adopcion = false;
	};

	return (
		<div>
			<button
				className="generarPDFTarjeta"
				title="Generar PDF"
				onClick={() =>
					dispatch({
						type: "OPEN_MODAL",
						dimmer: "blurring",
						size: "fullscreen",
					})
				}
			>
				<i aria-hidden="true" className="fa fa-file-pdf-o fa-fw"></i>
			</button>

			<Modal
				dimmer={dimmer}
				open={open}
				onClose={() => dispatch({ type: "CLOSE_MODAL" })}
			>
				<Modal.Header>Expedientes</Modal.Header>
				<Modal.Content image>
					<Image
						size="medium"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
						wrapped
					/>
					<Modal.Description>
						<Header>Opciones para generar PDF</Header>
						<div>
							<div>
								{" "}
								<Checkbox
									name="seleccionarTodo"
									checked={stateCheck.seleccionarTodo}
									label="Seleccionar todo"
									toggle
									onChange={() =>
										handleChange({
											name: "seleccionarTodo",
											value: stateCheck.seleccionarTodo,
										})
									}
								/>
							</div>
							<div>
								{" "}
								<Checkbox
									checked={stateCheck.datosGenerales}
									label="Datos Generales"
									toggle
									onChange={() =>
										handleChange({
											name: "datosGenerales",
											value: stateCheck.datosGenerales,
										})
									}
								/>
							</div>
							<div>
								{" "}
								<Checkbox
									checked={stateCheck.expedienteMedico}
									label="Expediente Médico"
									toggle
									onChange={() =>
										handleChange({
											name: "expedienteMedico",
											value: stateCheck.expedienteMedico,
										})
									}
								/>
							</div>
							<div>
								{" "}
								<Checkbox
									checked={stateCheck.hogarTemporal}
									label="Hogar Temporal"
									toggle
									onChange={() =>
										handleChange({
											name: "hogarTemporal",
											value: stateCheck.hogarTemporal,
										})
									}
								/>
							</div>
							<div>
								{" "}
								<Checkbox
									checked={stateCheck.adopcion}
									label="Adopción"
									toggle
									onChange={() =>
										handleChange({
											name: "adopcion",
											value: stateCheck.adopcion,
										})
									}
								/>
							</div>
						</div>
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						style={{
							borderRadius: "0.4rem",
							margin: "0% 2% 0% 0%",
						}}
						color="red"
						inverted
						onClick={() => {
							dispatch({ type: "CLOSE_MODAL" });
							handleRestablecer();
						}}
					>
						<Icon name="cancel" /> Cancelar
					</Button>
					{datosGenerales === false &&
					expedienteMedico === false &&
					hogarTemporal === false &&
					adopcion === false ? (
						<Button
							style={{
								borderRadius: "0.4rem",
								margin: "0% 1% 0% 0%",
							}}
							color="green"
							inverted
							onClick={() => {
								if (
									datosGenerales === false &&
									expedienteMedico === false &&
									hogarTemporal === false &&
									adopcion === false
								) {
									setSecondOpen(true);
								} else {
									dispatch({ type: "CLOSE_MODAL" });
									handleRestablecer();
								}
							}}
						>
							<Icon name="checkmark" /> Aceptar
						</Button>
					) : (
						<Link to={url} target="_blank">
							<Button
								style={{
									borderRadius: "0.4rem",
									margin: "0% 1% 0% 0%",
								}}
								color="green"
								inverted
								onClick={() => {
									dispatch({ type: "CLOSE_MODAL" });
									handleRestablecer();
								}}
							>
								<Icon name="checkmark" /> Aceptar
							</Button>
						</Link>
					)}
				</Modal.Actions>
				<Modal
					onClose={() => setSecondOpen(false)}
					open={secondOpen}
					size="small"
				>
					<Modal.Header>Selecciona al menos una opción</Modal.Header>
					<Modal.Content>
						<p>
							Para la generación del archivo PDF debe al menos
							seleccionar una de las opciones desplegadas
						</p>
					</Modal.Content>
					<Modal.Actions>
						<Button
							style={{
								borderRadius: "0.4rem",
								margin: "0% 2% 0% 0%",
							}}
							color="red"
							inverted
							onClick={() => setSecondOpen(false)}
						>
							<Icon name="cancel" /> Continuar
						</Button>
					</Modal.Actions>
				</Modal>
			</Modal>
		</div>
	);
}

export default BotonPDF;
