import React from "react";
import {
	Page,
	Text,
	Document,
	StyleSheet,
	Font,
	Image,
	PDFViewer,
	View
} from "@react-pdf/renderer";

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

							<Text style={styles.subtitle} break>
								Datos Generales
							</Text>
							<Text style={styles.text}>
								Nombre del rescatado:
							</Text>
							<Text style={styles.text}>Edad:</Text>
							<Text style={styles.text}>Género:</Text>
							<Text style={styles.text}>Especie:</Text>
							<Text style={styles.text}>Fecha de rescate:</Text>
							<Text style={styles.text}>Estatus:</Text>
							<Text style={styles.text}>Rescatistas:</Text>

							<Text style={styles.subtitle}>Dirección</Text>
							<Text style={styles.text}>Calle:</Text>
							<Text style={styles.text}>Número:</Text>
							<Text style={styles.text}>Colonia:</Text>
							<Text style={styles.text}>Municipio:</Text>
							<Image
								style={styles.image}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
							/>

							<Text style={styles.subtitle}>
								Expediente Médico
							</Text>
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
							<Text style={styles.text}>
								¿Está esterilizado?:
							</Text>
							<Text style={styles.text}>
								¿Desea agendar cita?
							</Text>
							<Text style={styles.text}>
								Fecha de esterilización:
							</Text>

							<Text style={styles.subtitle}>
								Cartilla de vacunación
							</Text>

							<Text style={styles.subtitle} break>
								Hogar Temporal
							</Text>
							<Text style={styles.text}>
								Tipo de Hogar Temporal:
							</Text>
							<Text style={styles.text}>
								Nombre del responsable:
							</Text>
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

							<Text style={styles.subtitle} break>
								Adopción
							</Text>
							<Text style={styles.text}>Adoptante:</Text>
							<Text style={styles.text}>Adoptado:</Text>
							<Text style={styles.text}>Medio:</Text>
							<Text style={styles.text}>Teléfono:</Text>
							<Text style={styles.text}>Visita de adopción:</Text>
							<Text style={styles.text}>Fecha de adopción:</Text>
							<Text style={styles.subtitle}>Dirección</Text>
							<Text style={styles.text}>Calle:</Text>
							<Text style={styles.text}>Número:</Text>
							<Text style={styles.text}>Colonia:</Text>
							<Text style={styles.text}>Municipio:</Text>
							<Image
								style={styles.image}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/1200px-Icecat1-300x300.svg.png"
							/>
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
