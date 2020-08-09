import React from "react";
import { Text, StyleSheet, Font, Image } from "@react-pdf/renderer";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	DataTableCell,
} from "@david.kucsai/react-pdf-table";

class ExpedienteMedicoPDF extends React.Component {
	state = {
		data: [
			{
				vacuna: "Puppy",
				estaVacunado: "",
				fechaVacunacion: "08/20/2000",
			},

			{
				vacuna: "Refuerzo Puppy",
				estaVacunado: "",
				fechaVacunacion: "08/20/2000",
			},

			{
				vacuna: "Múltiple",
				estaVacunado: "",
				fechaVacunacion: "08/20/2000",
			},

			{
				vacuna: "Refuerzo Múltiple",
				estaVacunado: "",
				fechaVacunacion: "08/20/2000",
			},

			{
				vacuna: "Rabia",
				estaVacunado: "",
				fechaVacunacion: "08/20/2000",
			},
		],
	};

	render() {
		return (
			<>
				<Text style={styles.subtitle}>Expediente Médico</Text>
				<Image
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
				/>
				<Image
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
				/>
				<Image
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
				/>
				<Text style={styles.subtitle} break>
					Diagnóstico
				</Text>
				<Text style={styles.text}>Atropellamiento:</Text>
				<Text style={styles.text}>TVT:</Text>
				<Text style={styles.text}>Sarna/Piel:</Text>
				<Text style={styles.text}>Viral:</Text>
				<Text style={styles.text}>Embarazo:</Text>
				<Text style={styles.text}>Cachorros:</Text>
				<Text style={styles.text}>Hemoparásitos:</Text>
				<Text style={styles.text}>Otro:</Text>

				<Text style={styles.subtitle}>Esterilización</Text>
				<Text style={styles.text}>¿Está esterilizado?:</Text>
				<Text style={styles.text}>¿Desea agendar cita?</Text>
				<Text style={styles.text}>Fecha de esterilización:</Text>

				<Text style={styles.subtitle}>Cartilla de vacunación</Text>
				<Table data={this.state.data}>
					<TableHeader textAlign={"center"} fontSize={12}>
						<TableCell weighting={0.3}>Vacunas</TableCell>
						<TableCell weighting={0.3}>¿Está vacunado?</TableCell>
						<TableCell weighting={0.4}>Fecha/Cita de vacunación</TableCell>
					</TableHeader>
					<TableBody>
						<DataTableCell weighting={0.3} getContent={(r) => r.vacuna} />
						<DataTableCell weighting={0.3} getContent={(r) => r.estaVacunado} />
						<DataTableCell weighting={0.4} getContent={(r) => r.fechaVacunacion} />
					</TableBody>
				</Table>
				<Text style={styles.subtitle}>
					Tratamiento
				</Text>
				<Table>
					<TableHeader textAlign={"center"}>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>

					</TableHeader>
				</Table>
			</>
		);
	}
}

Font.register({
	family: "Oswald",
	src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "Oswald",
	},
	author: {
		fontSize: 12,
		textAlign: "center",
		marginBottom: 40,
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: "Oswald",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "Times-Roman",
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 190,
	},
	imagePortada: {
		paddingTop: 100,
		paddingBottom: 50,
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
	},
});

export default ExpedienteMedicoPDF;
