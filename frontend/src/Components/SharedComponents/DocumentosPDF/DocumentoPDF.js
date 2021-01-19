import jsPDF from "jspdf";
import "jspdf-autotable";
import { AdopcionPDF } from "./AdopcionPDF";
import { DatosGeneralesPDF } from "./DatosGeneralesPDF";
import { ExpedienteMedicoPDF } from "./ExpedienteMedicoPDF";
import { HogarTemporalPDF } from "./HogarTemporalPDF";
import { PictureFrame } from "./Images/PictureFrame.js";
import { LaikaLogo } from "./Images/LaikaLogo.js";
import "./Raleway-Regular";
import "./Raleway-Bold";
import { IconoDefault } from "./Images/IconoDefault";

var data = {
	registroGeneral: {},
	expedienteMedico: {},
	hogarTemporal: {},
	adopcion: {},
};

async function fetchData(registro, id) {
	var response = await fetch(
		"http://localhost:3001/" + registro + "/?id=" + id,
		{
			method: "get",
			headers: { "Content-Type": "application/json" },
		}
	);
	var json = await response.json();
	return await json;
}

export async function PDFGenerator(
	id,
	datosGenerales,
	expedienteMedico,
	hogarTemporal,
	adopcion
) {
	data.registroGeneral = await fetchData("registroGeneral", id);
	if (expedienteMedico) {
		data.expedienteMedico = await fetchData("expedienteMedico", id);
	}

	if (hogarTemporal) {
		data.hogarTemporal = await fetchData("hogarTemporal", id);
	}

	if (adopcion) {
		data.adopcion = await fetchData("adopcion", id);
	}
	var doc = new jsPDF("p", "mm", [216, 279]);

	doc.setProperties({
		title: "Expedientes LAIKA",
	});

	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 20, "F");
	doc.rect(0, 250, 2300, 40, "F");

	doc.addImage(LaikaLogo, "PNG", 4, 2, 32, 18, "", "FAST");
	doc.addImage(PictureFrame, "PNG", 53, 60, 115, 120, "", "FAST");

	if(data.registroGeneral.foto) {
		var buffer = Buffer.from(data.registroGeneral.foto.data);
		doc.addImage(buffer.toString("utf-8"), "JPEG", 77, 83, 70, 74, "", "FAST");
	} else {
		doc.addImage(IconoDefault, "JPEG", 77, 83, 70, 74, "", "FAST");
	}
	
	doc.setFont("Raleway-Regular", "normal");	
	doc.setFontSize(20);
	doc.text("ID: " + id, 110, 190, { align: "center" });
	doc.text("Nombre: " + data.registroGeneral.nombre, 110, 200, {
		align: "center",
	});

	if (datosGenerales) {
		DatosGeneralesPDF(doc, data);
	}
	if (expedienteMedico) {
		ExpedienteMedicoPDF(doc, data);
	}
	if (hogarTemporal) {
		HogarTemporalPDF(doc, data);
	}
	if (adopcion) {
		AdopcionPDF(doc, data);
	}

	var string = doc.output("datauristring");
	var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
	var x = window.open();
	x.document.open();
	x.document.write(embed);
	x.document.close();
}
