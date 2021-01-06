import React from "react";
import { Text, StyleSheet, Font, Image } from "@react-pdf/renderer";
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	DataTableCell,
} from "@david.kucsai/react-pdf-table";

class HogarTemporalPDF extends React.Component {
	formatDate = (date) => {
		var d = new Date(date),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [day, month, year].join("/");
	};

	render() {
		return (
			<>
				<Text style={styles.subtitle}>Hogar Temporal</Text>
				<Text style={styles.text}>
					{"Tipo de Hogar Temporal: " + this.props.data.tipoHT}
				</Text>
				<Text style={styles.text}>
					{"Nombre del responsable: " + this.props.data.nombreHT}
				</Text>
				<Text style={styles.text}>
					{"Teléfono: " + this.props.data.telefonoHT}
				</Text>
				<Text style={styles.text}>
					{"Fecha Inicio: " +
						this.formatDate(this.props.data.fechaInicioHT)}
				</Text>
				<Text style={styles.text}>
					{"Fecha Final: " +
						this.formatDate(this.props.data.fechaFinalHT)}
				</Text>
				<Text style={styles.subtitle}>Dirección</Text>
				<Text style={styles.text}>
					{"Calle: " + this.props.data.calle}
				</Text>
				<Text style={styles.text}>
					{"Número: " + this.props.data.numero}
				</Text>
				<Text style={styles.text}>
					{"Colonia: " + this.props.data.colonia}
				</Text>
				<Text style={styles.text}>
					{"Municipio: " + this.props.data.municipio}
				</Text>
				<Image
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
				/>
				<Text style={styles.subtitle} break>
					Comentarios Hogar Temporal
				</Text>
				<Table>
					<TableHeader textAlign="center">
						<TableCell weighting="0.4">Comentarios</TableCell>
						<TableCell weighting="0.4">Acción</TableCell>
						<TableCell weighting="0.2">Fecha</TableCell>
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

export default HogarTemporalPDF;
