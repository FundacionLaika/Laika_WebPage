import { formatDate, boolToString } from "../../SharedFunctions/PDFfunctions";
import { LaikaLogo } from "./Images/LaikaLogo";
import { Medkit } from "./Images/Medkit";
import { Stethoscopy } from "./Images/Stethoscopy";
import { Syringe } from "./Images/Syringe";
import { Medician } from "./Images/Medician";
import { CameraRetro } from "./Images/CameraRetro";
import { Heartbeat} from "./Images/Heartbeat";
import { IconoDefault } from "./Images/IconoDefault";

export function ExpedienteMedicoPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("Raleway-Regular", "normal");
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Expediente Médico", 30, 16);
	doc.addImage(Medkit, "PNG", 10, 6, 12, 12, "", "FAST");
	doc.addImage(LaikaLogo, "PNG", 180, 4, 32, 18, "", "FAST");
	doc.setTextColor("#000000");
	doc.setFontSize(16);

	doc.addImage(Stethoscopy, "PNG", 14, 37, 7, 7, "", "FAST");
	doc.text("Diagnóstico", 26, 42);
	doc.autoTable({
		startY: 50,
		tableWidth: 110,
		columnStyles: {
			1: { halign: "center" },
		},
		head: [
			[
				{ content: "Diagnóstico" },
				{ content: "Aplicada", styles: { halign: "center" } },
			],
		],
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
			{
				header: "Diagnóstico",
				dataKey: "nombre",
				styles: { halign: "center" },
			},
			{ header: "Aplicada", dataKey: "flag" },
		],
	});

	doc.addImage(Syringe, "PNG", 14, 141, 7, 7, "", "FAST");
	doc.text("Cartilla de vacunación", 26, 146);
	doc.autoTable({
		startY: 154,
		tableWidth: 110,
		columnStyles: {
			1: { halign: "center" },
			2: { halign: "center" },
		},
		head: [
			[
				{ content: "Vacunas" },
				{ content: "Aplicada", styles: { halign: "center" } },
				{ content: "Fecha/Cita", styles: { halign: "center" } },
			],
		],
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

	doc.addImage(Medician, "PNG", 14, 233, 7, 7, "", "FAST");
	doc.text("Esterilización", 26, 238);
	doc.autoTable({
		startY: 246,
		tableWidth: 110,
		columnStyles: {
			1: { halign: "center" },
			2: { halign: "center" },
			3: { halign: "center" },
		},
		head: [
			[
				{ content: "¿Está esterilizado?" },
				{ content: "Cita agendada", styles: { halign: "center" } },
				{ content: "Fecha agendada", styles: { halign: "center" } },
			],
		],
		body: [
			{
				estaEsterilizado: boolToString(
					data.expedienteMedico.esterilizado
				),
				citaEsterilizacion: boolToString(
					data.expedienteMedico.citaEsterilizacion
				),
				fechaEsterilizacion: formatDate(
					data.expedienteMedico.fechaEsterilizacion
				),
			},
		],
		columns: [
			{ header: "¿Está esterilizado?", dataKey: "estaEsterilizado" },
			{ header: "Cita agendada", dataKey: "citaEsterilizacion" },
			{ header: "Fecha agendada", dataKey: "fechaEsterilizacion" },
		],
	});

	doc.addImage(CameraRetro, "PNG", 144, 37, 7, 7, "", "FAST");
	doc.text("Progreso", 156, 42);
	if (data.expedienteMedico.foto1) {
		var foto1 = Buffer.from(data.expedienteMedico.foto1.data);
		doc.addImage(
			foto1.toString("utf-8"),
			"JPEG",
			144,
			50,
			60,
			64,
			"",
			"FAST"
		);
	} else {
		doc.addImage(IconoDefault, "JPEG", 144, 50, 60, 64, "", "FAST");
	}

	if (data.expedienteMedico.foto2) {
		var foto2 = Buffer.from(data.expedienteMedico.foto2.data);
		doc.addImage(
			foto2.toString("utf-8"),
			"JPEG",
			144,
			123.5,
			60,
			64,
			"",
			"FAST"
		);
	} else {
		doc.addImage(IconoDefault, "JPEG", 144, 123.5, 60, 64, "", "FAST");
	}

	if (data.expedienteMedico.foto3) {
		var foto3 = Buffer.from(data.expedienteMedico.foto3.data);
		doc.addImage(
			foto3.toString("utf-8"),
			"JPEG",
			144,
			197.4,
			60,
			64,
			"",
			"FAST"
		);
	} else {
		doc.addImage(IconoDefault, "JPEG", 144, 197.4, 60, 64, "", "FAST");
	}

	data.expedienteMedico.tratamiento.map((row) => {
		row.fechaInicio = formatDate(row.fechaInicio);
		row.fechaFinal = formatDate(row.fechaFinal);
		row.citaMedica = formatDate(row.citaMedica);
	});

	if (data.expedienteMedico.tratamiento.length) {
		doc.addPage();
		doc.addImage(Heartbeat, "JPEG", 14, 13, 7, 7, "", "FAST");
		doc.text("Tratamiento", 26, 18);
		doc.autoTable({
			startY: 26,
			columnStyles: {
				0: { cellWidth: 24 },
				1: { cellWidth: 24 },
				2: { cellWidth: 56 },
				3: { cellWidth: 56 },
				4: { cellWidth: 24 },
			},
			head: [
				[
					{ content: "Fecha inicio", styles: { halign: "center" } },
					{ content: "Fecha final", styles: { halign: "center" } },
					{ content: "Comentarios", styles: { halign: "center" } },
					{ content: "Acción", styles: { halign: "center" } },
					{ content: "Cita médica", styles: { halign: "center" } },
				],
			],
			body: data.expedienteMedico.tratamiento,
			columns: [
				{ header: "Fecha inicio", dataKey: "fechaInicio" },
				{ header: "Fecha final", dataKey: "fechaFinal" },
				{ header: "Comentarios", dataKey: "comentarios" },
				{ header: "Acción", dataKey: "accion" },
				{ header: "Cita médica", dataKey: "citaMedica" },
			],
		});
	}
}
