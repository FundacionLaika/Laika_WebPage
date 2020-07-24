import React from "react";
import FiltroAdopcion from "./SubFiltros/FiltroAdopcion";
import FiltroExpedienteMedico from "./SubFiltros/FiltroExpedienteMedico";
import FiltroGeneral from "./SubFiltros/FiltroGeneral";
import FiltroHogarTemporal from "./SubFiltros/FiltroHogarTemporal";
import FiltroGlobal from "./SubFiltros/FiltroGlobal";

export default class Filtros extends React.Component {
	render() {
		return (
            <div>
                <div>
                    <FiltroGlobal filtros={this.props.filtros}/>
                </div>   
                <div>
                    {(() => {
                        switch (this.props.filtros.tarjeta) {
                            case "General":
                                if (this.props.dataLength && this.props.transaccionCompletada) {
                                    return <FiltroGeneral filtros={this.props.filtros}/>
                                }
                                break;

                            case "ExpedienteMedico":
                                if (this.props.dataLength && this.props.transaccionCompletada) {
                                    return <FiltroExpedienteMedico filtros={this.props.filtros}/>
                                }
                                break;

                            case "HogarTemporal":
                                if (this.props.dataLength && this.props.transaccionCompletada) {
                                    return <FiltroHogarTemporal filtros={this.props.filtros}/>
                                }
                                break;

                            case "Adopcion":
                                if (this.props.dataLength && this.props.transaccionCompletada) {
                                    return <FiltroAdopcion filtros={this.props.filtros}/>
                                }
                            break;

                            default:
                                return null;
                        }
                    })()}
                </div>
			</div>
		);
	}
}
