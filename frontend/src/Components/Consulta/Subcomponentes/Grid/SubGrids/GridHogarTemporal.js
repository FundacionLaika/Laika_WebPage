import React from "react";
import TarjetaHogarTemporal from "../Tarjetas/TarjetaHogarTemporal";
import "./Styles/Subgrid.css";

export default class GridHogarTemporal extends React.Component {
    state = {
        data: [],
    };

    fetchData = () => {
        fetch("https://fundacionlaika.herokuapp.com/consulta", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.props.filtros),
        })
            .then((response) => {
                if (response.ok) return response.json();
                else return [];
            })
            .then((response) => {
                this.setState({
                    data: response,
                });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.filtros !== prevProps.filtros) {
            this.fetchData();
        }
    }

    render() {
        if (!this.state.data) return null;
        return (
            <div className="subGrid">
                <div className="animalCounter">
                    <span>
                        {"Animales encontrados: " + this.state.data.length}
                    </span>
                </div>
                <div>
                    {this.state.data.map((tarjeta) => (
                        <TarjetaHogarTemporal
                            key={tarjeta.ID_Animal}
                            id={tarjeta.ID_Animal}
                            foto={tarjeta.Foto}
                            tipoHT={tarjeta.Tipo_HT}
                            responsableHT={tarjeta.ResponsableHT}
                            telefonoHT={tarjeta.TelefonoHT}
                            fechaInicioHT={tarjeta.FechaInicioHT}
                            fechaFinalHT={tarjeta.FechaFinalHT}
                            calle={tarjeta.CalleHT}
                            numero={tarjeta.NumeroHT}
                            colonia={tarjeta.ColoniaHT}
                            municipio={tarjeta.MunicipioHT}
                            concatAddress={this.props.concatAddress}
                            formatDate={this.props.formatDate}
                            openModal={this.props.openModal}
                            setID={this.props.setID}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
