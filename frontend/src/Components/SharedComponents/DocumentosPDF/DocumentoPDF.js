import jsPDF from "jspdf";
import "jspdf-autotable";

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
	if (datosGenerales) {
		fetchData("registroGeneral", id);
	}
	if (expedienteMedico) {
		fetchData("expedienteMedico", id);
	}
	if (hogarTemporal) {
		fetchData("hogarTemporal", id);
	}
	if (adopcion) {
		fetchData("adopcion", id);
	}

	var doc = new jsPDF("p", "pt");

	doc.setProperties({
		title: "Expediente de " + id,
	});

	doc.setFont("courier", "italic");
	doc.text(20, 20, "Agus es homosexual");

	doc.autoTable({
		head: [["Name", "Email", "Country"]],
		body: [
			["David", "david@example.com", "Sweden"],
			["Castille", "castille@example.com", "Spain"],
			// ...
		],
	});

	var string = doc.output("datauristring");
	var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
	var x = window.open();
	x.document.open();
	x.document.write(embed);
	x.document.close();
}
