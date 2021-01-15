import { formatDate } from "../../SharedFunctions/PDFfunctions";

export function AdopcionPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("Raleway-Regular", "normal");	
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Adopción", 10, 16);

	doc.setFontSize(24);
	doc.setTextColor("#000000");
	doc.text(
		"Visita de adopción: " + formatDate(data.adopcion.visitaDeAdopcion),
		10,
		36
	);
	doc.text("Adoptante: " + data.adopcion.adoptante, 10, 46);
	doc.text("Adoptado: " + data.adopcion.adoptado, 10, 56);
	doc.text("Teléfono: " + data.adopcion.telefono, 10, 66);
	doc.text("Calle: " + data.adopcion.calle, 10, 96);
	doc.text("Número: " + data.adopcion.numero, 10, 106);
	doc.text("Colonia: " + data.adopcion.colonia, 10, 116);
	doc.text("Municipio: " + data.adopcion.municipio, 10, 126);
	doc.text(
		"Fecha de adopción: " + formatDate(data.adopcion.fechaAdopcion),
		10,
		136
	);
	doc.text("Medio de adopción: " + data.adopcion.medioAdopcion, 10, 146);

	if (data.adopcion.foto) {
		var foto = Buffer.from(data.adopcion.foto.data);
		doc.addImage(
			foto.toString("utf-8"),
			"JPEG",
			8,
			180,
			60,
			64,
			"",
			"FAST"
		);
	}

	data.adopcion.comentarios.map((row) => {
		row.fecha = formatDate(row.fecha);
	});

	if (data.adopcion.comentarios.length) {
		doc.addPage();
		doc.autoTable({
			body: data.adopcion.comentarios,
			columns: [
				{ header: "Observaciones", dataKey: "observaciones" },
				{ header: "Acción", dataKey: "accion" },
				{ header: "Fecha", dataKey: "fecha" },
			],
		});
	}
}
