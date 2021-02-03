import React from "react";
import "./Styles/BotonPDF.css";

function BotonPDF(props) {
	return (
		<div>
			<button
				className="generarPDFTarjeta"
				title="Generar PDF"
				onClick={async () => {
					await props.setID(props.id);
					props.openModal();
				}}
			>
				<i aria-hidden="true" className="fa fa-file-pdf-o fa-fw"></i>
			</button>
		</div>
	);
}

export default BotonPDF;
