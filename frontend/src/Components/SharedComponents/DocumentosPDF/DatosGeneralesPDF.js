import { formatDate } from "../../SharedFunctions/PDFfunctions";
import { LaikaLogo } from "./Images/LaikaLogo";
import { GeneralData } from "./Images/GeneralData";
import { AddressBook } from "./Images/AddressBook";
import { MapMarked } from "./Images/MapMarked";
import { Users } from "./Images/Users";
import { Search } from "./Images/Search";

export function DatosGeneralesPDF(doc, data) {
	doc.addPage();
	doc.setFillColor("#51D1F6");
	doc.rect(0, 0, 2300, 25, "F");

	doc.setFont("Raleway-Regular", "normal");	
	doc.setFontSize(30);
	doc.setTextColor("#ffffff");
	doc.text("Registro General", 30, 16);
	doc.addImage(GeneralData, "PNG", 10, 6, 12, 12, "","FAST");
	doc.addImage(LaikaLogo, "PNG", 180, 4, 32, 18, "", "FAST");

	doc.setFontSize(19);
	doc.setTextColor("#000000");
	doc.addImage(AddressBook, "PNG", 15, 34, 7, 7, "", "FAST");
	doc.text("Datos generales", 27, 40);
	doc.setFontSize(14);
	doc.text("Nombre: " + data.registroGeneral.nombre, 15, 53);
	doc.text("Edad: " + data.registroGeneral.edad, 115, 53);
	doc.text("Género: " + data.registroGeneral.genero, 15, 63);
	doc.text("Especie: " + data.registroGeneral.especie, 115, 63);
	doc.text(
		"Fecha de rescate: " + formatDate(data.registroGeneral.fechaDeRescate),
		15,
		73
	);
	doc.text("Estatus: " + data.registroGeneral.estatus, 115, 73);

	doc.setFontSize(19);
	doc.addImage(MapMarked, "PNG", 15, 99, 7, 7, "", "FAST");
	doc.text("Dirección de rescate", 27, 105);
	doc.setFontSize(14);
	doc.text("Calle: " + data.registroGeneral.calle, 15, 118);
	doc.text("Número: " + data.registroGeneral.numero, 115, 118);
	doc.text("Colonia: " + data.registroGeneral.colonia, 15, 128);
	doc.text("Municipio: " + data.registroGeneral.municipio, 115, 128);


	doc.setFontSize(19);
	doc.addImage(Search, "PNG", 15, 154, 7, 7, "", "FAST");
	doc.text("Señas particulares", 27, 160);
	doc.autoTable({
		headStyles: {
			halign: "center"
		},
		bodyStyles: {
			fillColor: "#FFF8E7",
			halign: "center",
		},
		startY: 170,
		margin: {left: 12.6},
		tableWidth: 90,
		body: [{senasParticulares: data.registroGeneral.senasParticulares}],
		columns: [{ header: "Señas particulares", dataKey: "senasParticulares" }],
	});

	var startingPage =  doc.internal.getCurrentPageInfo().pageNumber;
	doc.setPage(startingPage);

	doc.addImage(Users, "PNG", 115, 154, 7, 7, "", "FAST");
	doc.text("Rescatistas", 127, 160);
	doc.autoTable({
		headStyles: {
			halign: "center"
		},
		bodyStyles: {
			fillColor: "#FFF8E7",
			halign: "center",
		},
		startY: 170,
		margin: { left: 112.6},
		tableWidth: 90,
		body: data.registroGeneral.rescatistas,
		columns: [{ header: "Rescatistas", dataKey: "text" }],
	});
}
