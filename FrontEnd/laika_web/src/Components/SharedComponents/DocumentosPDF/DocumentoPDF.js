import React from "react";
import {
	Page,
	Text,
	Document,
	StyleSheet,
	Font,
	Image,
	PDFViewer,
} from "@react-pdf/renderer";
import DatosGeneralesPDF from "./DatosGeneralesPDF";
import ExpedienteMedicoPDF from "./ExpedienteMedicoPDF";
import HogarTemporalPDF from "./HogarTemporalPDF";
import AdopcionPDF from "./AdopcionPDF";
import queryString from "query-string";

class DocumentoPDF extends React.Component {
	fetchData = () => {
		let url = this.props.location.search;
		let params = queryString.parse(url);

		fetch("http://localhost:3001/hogarTemporal/?id=" + params.id, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				for (const element in response) {
					if (element.includes("fecha")) {
						this.setState({
							[element]: new Date(response[element]),
						});
					} else {
						this.setState({
							[element]: response[element],
						});
					}
				}
			})
			.catch((err) => console.log(err));
	};
	render() {
		const url = this.props.location.search;
		const params = queryString.parse(url, { parseBooleans: true });

		return (
			<div style={{ height: "100vh" }}>
				<PDFViewer width="100%" height="100%">
					<Document title="Expediente">
						<Page style={styles.body}>
							<Text style={styles.header} fixed>
								Fundación Laika Protectora de Animales, A.C.
							</Text>
							<Image
								style={styles.imagePortada}
								src="/logoPDF.jpg"
							/>
							<Text style={styles.title}>Expedientes</Text>
							<Text style={styles.author}>Agustín ID: 30</Text>
						</Page>
						<Page style={styles.body}>
							{params.datosGenerales ? (
								<DatosGeneralesPDF />
							) : null}
							{params.expedienteMedico ? (
								<ExpedienteMedicoPDF />
							) : null}
							{params.hogarTemporal ? <HogarTemporalPDF /> : null}
							{params.adopcion ? <AdopcionPDF /> : null}

							<Text
								style={styles.pageNumber}
								render={({ pageNumber, totalPages }) =>
									`${pageNumber - 1} / ${totalPages - 1}`
								}
								fixed
							/>
						</Page>
					</Document>
				</PDFViewer>
			</div>
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

export default DocumentoPDF;
