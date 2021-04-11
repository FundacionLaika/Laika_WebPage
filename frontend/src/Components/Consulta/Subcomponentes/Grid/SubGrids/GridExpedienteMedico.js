import React from "react";
import TarjetaExpedienteMedico from "../Tarjetas/TarjetaExpedienteMedico";
import "./Styles/Subgrid.css";

export default class GridExpedienteMedico extends React.Component {
    state = {
        data: [],
    };
    fetchData = () => {
        fetch("http://localhost:3001/consulta", {
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
                        <TarjetaExpedienteMedico
                            key={tarjeta.ID_Animal}
                            id={tarjeta.ID_Animal}
                            foto={tarjeta.Foto}
                            atropellamiento={tarjeta.Atropellamiento}
                            tvt={tarjeta.TVT}
                            sarnaPiel={tarjeta.Sarna_Piel}
                            viral={tarjeta.Viral}
                            embarazo={tarjeta.Embarazo}
                            cachorros={tarjeta.Cachorros}
                            hemoparasitos={tarjeta.Hemoparasitos}
                            otro={tarjeta.Otro}
                            especie={tarjeta.Especie}
                            vacuna1={tarjeta.Vacuna1}
                            vacuna2={tarjeta.Vacuna2}
                            vacuna3={tarjeta.vacuna3}
                            vacuna4={tarjeta.Vacuna4}
                            vacuna5={tarjeta.Vacuna5}
                            fechaEsterilizacion={tarjeta.FechaEsterilizacion}
                            citaAgendada={tarjeta.CitaAgendada}
                            estaEsterilizado={tarjeta.EstaEsterilizado}
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
