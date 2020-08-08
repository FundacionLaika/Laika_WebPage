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

class DocumentoPDF extends React.Component {
	render() {
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
							<Text style={styles.author}>Agustín ID:20</Text>
							<DatosGeneralesPDF />
							<ExpedienteMedicoPDF />
							<HogarTemporalPDF />
							<AdopcionPDF />

							<Text
								style={styles.pageNumber}
								render={({ pageNumber, totalPages }) =>
									`${pageNumber} / ${totalPages}`
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
