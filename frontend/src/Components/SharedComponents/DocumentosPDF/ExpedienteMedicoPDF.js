import { formatDate, boolToString } from "../../SharedFunctions/PDFfunctions";

export function ExpedienteMedicoPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("raleway", "bold");
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Expediente Médico", 10, 16);

	doc.autoTable({
		startY: 50,
		body: [
			{
				nombre: "Atropellamiento",
				flag: boolToString(data.expedienteMedico.atropellamiento),
			},
			{
				nombre: "TVT",
				flag: boolToString(data.expedienteMedico.tvt),
			},
			{
				nombre: "Sarna/Piel",
				flag: boolToString(data.expedienteMedico.sarnaPiel),
			},
			{
				nombre: "Viral",
				flag: boolToString(data.expedienteMedico.viral),
			},
			{
				nombre: "Embarazo",
				flag: boolToString(data.expedienteMedico.embarazo),
			},
			{
				nombre: "Cachorros",
				flag: boolToString(data.expedienteMedico.cachorros),
			},
			{
				nombre: "Hemoparásitos",
				flag: boolToString(data.expedienteMedico.hemoparasitos),
			},
			{
				nombre: "Otro",
				flag: boolToString(data.expedienteMedico.otroEspecificar),
			},
		],
		columns: [
			{ header: "Diagnóstico", dataKey: "nombre" },
			{ header: "Aplicada", dataKey: "flag" },
		],
	});

	doc.autoTable({
		startY: 120,
		body: [
			{
				nombre: "Puppy",
				flag: boolToString(data.expedienteMedico.puppy),
				fechaVacunacion: formatDate(data.expedienteMedico.fechaPuppy),
			},
			{
				nombre: "Refuerzo Puppy",
				flag: boolToString(data.expedienteMedico.refuerzoPuppy),
				fechaVacunacion: formatDate(
					data.expedienteMedico.fechaRefuerzoPuppy
				),
			},
			{
				nombre: "Múltiple",
				flag: boolToString(data.expedienteMedico.multiple),
				fechaVacunacion: formatDate(
					data.expedienteMedico.fechaMultiple
				),
			},
			{
				nombre: "Refuerzo Múltiple",
				flag: boolToString(data.expedienteMedico.refuerzoMultiple),
				fechaVacunacion: formatDate(
					data.expedienteMedico.fechaRefuerzoMultiple
				),
			},
			{
				nombre: "Rabia",
				flag: boolToString(data.expedienteMedico.rabia),
				fechaVacunacion: formatDate(data.expedienteMedico.fechaRabia),
			},
		],
		columns: [
			{ header: "Vacunas", dataKey: "nombre" },
			{ header: "Aplicada", dataKey: "flag" },
			{ header: "Fecha/Cita", dataKey: "fechaVacunacion" },
		],
	});

	if (data.expedienteMedico.foto1) {
		var foto1 = Buffer.from(data.expedienteMedico.foto1.data);
		doc.addImage(
			foto1.toString("utf-8"),
			"JPEG",
			8,
			180,
			60,
			64,
			"",
			"FAST"
		);
	}

	if (data.expedienteMedico.foto2) {
		var foto2 = Buffer.from(data.expedienteMedico.foto2.data);
		doc.addImage(
			foto2.toString("utf-8"),
			"JPEG",
			78,
			180,
			60,
			64,
			"",
			"FAST"
		);
	}

	if (data.expedienteMedico.foto3) {
		var foto3 = Buffer.from(data.expedienteMedico.foto3.data);
		doc.addImage(
			foto3.toString("utf-8"),
			"JPEG",
			148,
			180,
			60,
			64,
			"",
			"FAST"
		);
	}

	data.expedienteMedico.tratamiento.map((row) => {
		row.fechaInicio = formatDate(row.fechaInicio);
		row.fechaFinal = formatDate(row.fechaFinal);
	});

	if (data.expedienteMedico.tratamiento.length) {
		doc.addPage();
		doc.autoTable({
			body: data.expedienteMedico.tratamiento,
			columns: [
				{ header: "Fecha inicio", dataKey: "fechaInicio" },
				{ header: "Fecha final", dataKey: "fechaFinal" },
				{ header: "Comentarios", dataKey: "comentarios" },
				{ header: "Acción", dataKey: "accion" },
			],
		});
	}
}
