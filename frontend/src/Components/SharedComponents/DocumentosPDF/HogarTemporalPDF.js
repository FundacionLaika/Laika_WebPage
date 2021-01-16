import { formatDate } from "../../SharedFunctions/PDFfunctions";
import { Casa } from "./Images/Casa";
import { LaikaLogo } from "./Images/LaikaLogo";
import { IconoDefault } from "./Images/IconoDefault";

export function HogarTemporalPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("Raleway-Regular", "normal");
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Hogar Temporal", 30, 16);
	doc.addImage(Casa, "PNG", 10, 6, 12, 12, "", "FAST");
	doc.addImage(LaikaLogo, "PNG", 180, 4, 32, 18, "", "FAST");

	doc.setFontSize(24);
	doc.setTextColor("#000000");
	doc.text("Tipo de HT: " + data.hogarTemporal.tipoHT, 10, 36);
	doc.text("Nombre de HT: " + data.hogarTemporal.nombreHT, 10, 46);
	doc.text("Teléfono: " + data.hogarTemporal.telefonoHT, 10, 56);
	doc.text(
		"Fecha inicio: " + formatDate(data.hogarTemporal.fechaInicioHT),
		10,
		66
	);
	doc.text(
		"Fecha final: " + formatDate(data.hogarTemporal.fechaFinalHT),
		10,
		76
	);
	doc.text("Calle: " + data.hogarTemporal.calle, 10, 96);
	doc.text("Número: " + data.hogarTemporal.numero, 10, 106);
	doc.text("Colonia: " + data.hogarTemporal.colonia, 10, 116);
	doc.text("Municipio: " + data.hogarTemporal.municipio, 10, 126);

	if (data.hogarTemporal.foto) {
		var foto = Buffer.from(data.hogarTemporal.foto.data);
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
	} else {
		doc.addImage(IconoDefault, "JPEG", 8, 180, 60, 64, "", "FAST");
	}

	data.hogarTemporal.comentarios.map((row) => {
		row.fecha = formatDate(row.fecha);
	});

	if (data.hogarTemporal.comentarios.length) {
		doc.addPage();
		doc.autoTable({
			columnStyles: {
				0: { cellWidth: 80 },
				1: { cellWidth: 80 },
				2: { cellWidth: 24 },
			},
			head: [
				[
					{ content: "Observaciones", styles: { halign: "center" } },
					{ content: "Acción", styles: { halign: "center" } },
					{ content: "Fecha", styles: { halign: "center" } },
				],
			],
			body: data.hogarTemporal.comentarios,
			columns: [
				{ header: "Observaciones", dataKey: "observaciones" },
				{ header: "Acción", dataKey: "accion" },
				{ header: "Fecha", dataKey: "fecha" },
			],
		});
	}
}
