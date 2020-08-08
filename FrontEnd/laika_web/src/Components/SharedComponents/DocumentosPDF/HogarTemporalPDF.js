import React from "react";
import { Text, StyleSheet, Font, Image } from "@react-pdf/renderer";

class HogarTemporalPDF extends React.Component {
	render() {
		return (
			<>
				<Text style={styles.subtitle} break>
					Hogar Temporal
				</Text>
				<Text style={styles.text}>Tipo de Hogar Temporal:</Text>
				<Text style={styles.text}>Nombre del responsable:</Text>
				<Text style={styles.text}>Teléfono:</Text>
				<Text style={styles.text}>Fecha Inicio:</Text>
				<Text style={styles.text}>Fecha Final:</Text>
				<Text style={styles.subtitle}>Dirección</Text>
				<Text style={styles.text}>Calle:</Text>
				<Text style={styles.text}>Número:</Text>
				<Text style={styles.text}>Colonia:</Text>
				<Text style={styles.text}>Municipio:</Text>
				<Image
					style={styles.image}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
				/>
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
