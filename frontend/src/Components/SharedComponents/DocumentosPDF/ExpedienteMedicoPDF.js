import React from "react";

export function ExpedienteMedicoPDF(doc) {
	doc.addPage();
    doc.setFillColor("#51D1F6");
    doc.rect(0, 0, 2300, 25, "F");
    
    doc.setFont("raleway", "bold");
    doc.setFontSize(30);
    doc.setTextColor("#ffffff");
    doc.text("Expediente Médico",10,16);
}