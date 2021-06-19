import React from "react";
import TarjetaGeneral from "../Tarjetas/TarjetaGeneral";
import "./Styles/Subgrid.css";

export default class GridGeneral extends React.Component {
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
                        <TarjetaGeneral
                            key={tarjeta.ID_Animal}
                            id={tarjeta.ID_Animal}
                            foto={tarjeta.Foto}
                            nombre={tarjeta.Nombre}
                            edad={tarjeta.Edad}
                            genero={tarjeta.Genero}
                            especie={tarjeta.Especie}
                            estatus={tarjeta.Estatus}
                            senasParticulares={tarjeta.SenasParticulares}
                            fechaRescate={tarjeta.FechaRescate}
                            calle={tarjeta.RteCalle}
                            numero={tarjeta.RteNumero}
                            colonia={tarjeta.RteColonia}
                            municipio={tarjeta.RteMunicipio}
                            rescatistas={tarjeta.Rescatistas}
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
