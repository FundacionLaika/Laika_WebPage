import { formatDate } from "../../SharedFunctions/PDFfunctions";
import { Casa } from "./Images/Casa";
import { LaikaLogo } from "./Images/LaikaLogo";
import { IconoDefault } from "./Images/IconoDefault";
import { MapMarked } from "./Images/MapMarked";
import { AddressBook } from "./Images/AddressBook";
import { CameraRetro } from "./Images/CameraRetro";
import { Comments } from "./Images/Comments";

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

	doc.setFontSize(19);
	doc.setTextColor("#000000");
	doc.setFont("Raleway-Bold", "bold");	
	doc.addImage(AddressBook, "PNG", 15, 34, 7, 7, "", "FAST");
	doc.text("Datos HT", 27, 40);
	doc.setFontSize(14);
	doc.setFont("Raleway-Regular", "normal");	
	doc.text("Tipo de HT: " + data.hogarTemporal.tipoHT, 15, 53);
	doc.text("Nombre: " + data.hogarTemporal.nombreHT, 15, 63);
	doc.text("Teléfono: " + data.hogarTemporal.telefonoHT, 15, 73);
	doc.text(
		"Fecha inicio: " + formatDate(data.hogarTemporal.fechaInicioHT),
		115,
		53
	);
	doc.text(
		"Fecha final: " + formatDate(data.hogarTemporal.fechaFinalHT),
		115,
		73
	);


	doc.setFontSize(19);
	doc.setFont("Raleway-Bold", "bold");	
	doc.addImage(MapMarked, "PNG", 15, 99, 7, 7, "", "FAST");
	doc.text("Dirección HT", 27, 105);
	doc.setFontSize(14);
	doc.setFont("Raleway-Regular", "normal");	
	doc.text("Calle: " + data.hogarTemporal.calle, 15, 118);
	doc.text("Número: " + data.hogarTemporal.numero, 115, 118);
	doc.text("Colonia: " + data.hogarTemporal.colonia, 15, 128);
	doc.text("Municipio: " + data.hogarTemporal.municipio, 115, 128);

	doc.setFontSize(19);
	doc.setFont("Raleway-Bold", "bold");	
	doc.addImage(CameraRetro, "PNG", 15, 153, 7, 7, "", "FAST");
	doc.text("Foto HT", 27, 159);
	if (data.hogarTemporal.foto) {
		var foto = Buffer.from(data.hogarTemporal.foto.data);
		doc.addImage(
			foto.toString("utf-8"),
			"JPEG",
			69,
			173,
			80,
			84,
			"",
			"FAST"
		);
	} else {
		doc.addImage(IconoDefault, "JPEG", 69, 173, 80, 84, "", "FAST");
	}

	data.hogarTemporal.comentarios.map((row) => {
		row.fecha = formatDate(row.fecha);
	});

	if (data.hogarTemporal.comentarios.length) {
		doc.addPage();
		doc.addImage(Comments, "JPEG", 14, 13, 7, 7, "", "FAST");
		doc.text("Comentarios", 26, 18);
		doc.autoTable({
			startY: 26,
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
