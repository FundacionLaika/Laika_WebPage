import { formatDate, validInfo } from "../../SharedFunctions/PDFfunctions";
import { IconoDefault } from "./Images/IconoDefault";
import { LaikaLogo } from "./Images/LaikaLogo";
import { Paw } from "./Images/Paw";
import { MapMarked } from "./Images/MapMarked";
import { Comments } from "./Images/Comments";
import { AddressBook } from "./Images/AddressBook";
import { CameraRetro } from "./Images/CameraRetro";

export function AdopcionPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("Raleway-Regular", "normal");
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Adopción", 30, 16);
	doc.addImage(Paw, "PNG", 10, 6, 12, 12, "", "FAST");
	doc.addImage(LaikaLogo, "PNG", 180, 4, 32, 18, "", "FAST");

	doc.setFontSize(19);
	doc.setFont("Raleway-Bold", "bold");	
	doc.setTextColor("#000000");
	doc.addImage(AddressBook, "PNG", 15, 34, 7, 7, "", "FAST");
	doc.text("Datos adopción", 27, 40);
	doc.setFontSize(14);
	doc.setFont("Raleway-Regular", "normal");	
	doc.text("Adoptante: " + validInfo(data.adopcion.adoptante), 15, 53);
	doc.text("Adoptado: " + validInfo(data.adopcion.adoptado), 15, 63);
	doc.text("Medio de adopción: " + validInfo(data.adopcion.medioAdopcion), 15, 73);
	doc.text("Petco ID: " + validInfo(data.adopcion.idPETCO), 15, 83);
	doc.text("Teléfono: " + validInfo(data.adopcion.telefono), 115, 53);
	doc.text(
		"Visita de adopción: " + formatDate(data.adopcion.visitaDeAdopcion),
		115,
		63
	);
	doc.text(
		"Fecha de adopción: " + formatDate(data.adopcion.fechaAdopcion),
		115,
		73
	);

	doc.setFontSize(19);
	doc.setFont("Raleway-Bold", "bold");	
	doc.addImage(MapMarked, "PNG", 15, 103, 7, 7, "", "FAST");
	doc.text("Dirección Adoptante", 27, 109);
	doc.setFontSize(14);
	doc.setFont("Raleway-Regular", "normal");	
	doc.text("Calle: " + validInfo(data.adopcion.calle), 15, 122);
	doc.text("Número: " + validInfo(data.adopcion.numero), 115, 122);
	doc.text("Colonia: " + validInfo(data.adopcion.colonia), 15, 132);
	doc.text("Municipio: " + validInfo(data.adopcion.municipio), 115, 132);

	doc.setFontSize(19);
	doc.setFont("Raleway-Bold", "bold");	
	doc.addImage(CameraRetro, "PNG", 15, 153, 7, 7, "", "FAST");
	doc.text("Foto adopción", 27, 159);
	if (data.adopcion.foto) {
		var foto = Buffer.from(data.adopcion.foto.data);
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
		doc.addImage(IconoDefault, "JPEG",  69, 173, 80, 84, "", "FAST");
	}

	data.adopcion.comentarios.forEach((row) => {
		row.fecha = formatDate(row.fecha);
	});

	if (data.adopcion.comentarios.length) {
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
			body: data.adopcion.comentarios,
			columns: [
				{ header: "Observaciones", dataKey: "observaciones" },
				{ header: "Acción", dataKey: "accion" },
				{ header: "Fecha", dataKey: "fecha" },
			],
		});
	}
}
