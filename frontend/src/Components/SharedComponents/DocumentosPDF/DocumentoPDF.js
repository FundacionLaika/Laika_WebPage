import jsPDF from "jspdf";
import "jspdf-autotable";
import { AdopcionPDF } from "./AdopcionPDF";
import { DatosGeneralesPDF } from "./DatosGeneralesPDF";
import { ExpedienteMedicoPDF } from "./ExpedienteMedicoPDF";
import { HogarTemporalPDF } from "./HogarTemporalPDF";

var data = {
	registroGeneral: "",
	expedienteMedico: "",
	hogarTemporal: "",
	adopcion: "",
};

const fetchData = async (registro, id) => {
	fetch("http://localhost:3001/" + registro + "/?id=" + id, {
		method: "get",
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.json())
		.then((response) => {
			data[registro] = response;
		})
		.catch((err) => {
			console.log(err);
		});
};

export function PDFGenerator(
	id,
	datosGenerales,
	expedienteMedico,
	hogarTemporal,
	adopcion
) {
	var doc = new jsPDF("p", "pt");

	doc.setProperties({
		title: "Expedientes LAIKA",
	});

	if (datosGenerales) {
		fetchData("registroGeneral", id);
		DatosGeneralesPDF(doc);
	}
	if (expedienteMedico) {
		fetchData("expedienteMedico", id);
		ExpedienteMedicoPDF(doc);
	}
	if (hogarTemporal) {
		fetchData("hogarTemporal", id);
		HogarTemporalPDF(doc);
	}
	if (adopcion) {
		fetchData("adopcion", id);
		AdopcionPDF(doc);
	}

	var string = doc.output("datauristring");
	var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
	var x = window.open();
	x.document.open();
	x.document.write(embed);
	x.document.close();
}
