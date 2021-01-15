import { formatDate } from "../../SharedFunctions/PDFfunctions";

export function DatosGeneralesPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("raleway", "bold");
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Datos Generales", 10, 16);

	doc.setFontSize(24);
	doc.setTextColor("#000000");
	doc.text("Nombre: " + data.registroGeneral.nombre, 10, 36);
	doc.text("Edad: " + data.registroGeneral.edad, 10, 46);
	doc.text("Género: " + data.registroGeneral.genero, 10, 56);
	doc.text("Especie: " + data.registroGeneral.especie, 10, 66);
	doc.text(
		"Fecha de rescate: " + formatDate(data.registroGeneral.fechaDeRescate),
		10,
		76
	);
	doc.text("Estatus: " + data.registroGeneral.estatus, 10, 86);
	doc.text("Calle: " + data.registroGeneral.calle, 10, 96);
	doc.text("Número: " + data.registroGeneral.numero, 10, 106);
	doc.text("Colonia: " + data.registroGeneral.colonia, 10, 116);
	doc.text("Municipio: " + data.registroGeneral.municipio, 10, 126);

	doc.autoTable({
		startY: 150,
		tableWidth: 100,
		body: data.registroGeneral.rescatistas,
		columns: [{ header: "Rescatistas", dataKey: "text" }],
	});
}
