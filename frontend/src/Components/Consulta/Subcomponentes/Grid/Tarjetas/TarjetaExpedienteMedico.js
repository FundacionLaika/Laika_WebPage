import React from "react";
import FotoFrame from "../../../../SharedComponents/Tarjetas/FotoFrame.js";
import "./Styles/TarjetaExpedienteMedico.css";
import "./Styles/Tarjeta.css";
import BotonPDF from "../../../../SharedComponents/BotonPDF.js";
import { Link } from "react-router-dom";

export default class TarjetaExpedienteMedico extends React.Component {
    bool2string = (data) => {
        if (data === "1") return "Si";
        else if (data === "0") return "No";
        else return "No hay Información";
    };

    decodificarVacuna = (vacuna, especie) => {
        if (!vacuna || !especie) return "";

        const decoder = {
            Vacuna1: {
                Canino: "Puppy",
                Felino: "Triple Viral Felina",
                Otro: "Vacuna 1",
            },
            Vacuna2: {
                Canino: "Refuerzo Puppy",
                Felino: "Refuerzo Triple Viral Felina",
                Otro: "Vacuna 2",
            },
            Vacuna3: {
                Canino: "Multiple",
                Felino: "Leucemia",
                Otro: "Vacuna 3",
            },
            Vacuna4: {
                Canino: "Refuerzo Multiple",
                Felino: "Desparasitacion",
                Otro: "Vacuna 4",
            },
            Vacuna5: {
                Canino: "Rabia",
                Felino: "Rabia",
                Otro: "Vacuna 5",
            },
        };

        return decoder[vacuna][especie];
    };

    render() {
        return (
            <div className="tarjeta">
                <div className="fotoFrame">
                    <div className="fotoT">
                        <FotoFrame foto={this.props.foto} />
                    </div>
                    <div className="idT">
                        <div className="idIconT">
                            <img src="/icon-id-2.png" alt="" />
                        </div>
                        <div className="campoData">
                            <span> {this.props.id} </span>
                        </div>
                    </div>
                </div>

                <div className="infoTarjetaEM">
                    <div className="diagnosticoTEM">
                        <div className="nombreSeccionT">
                            <i
                                aria-hidden="true"
                                className="fa fa-stethoscope fa-fw iconoTarjeta"
                            ></i>
                            <span className="nombreCampo"> Diagnóstico: </span>
                        </div>

                        {!this.props.atropellamiento &&
                        !this.props.tvt &&
                        !this.props.sarnaPiel &&
                        !this.props.viral &&
                        !this.props.embarazo &&
                        !this.props.cachorros &&
                        !this.props.hemoparasitos &&
                        (!this.props.otro || this.props.length === 0) ? (
                            <div
                                style={{ paddingTop: "2vh", textAlign: "left" }}
                            >
                                {" "}
                                {"Ninguno"}{" "}
                            </div>
                        ) : null}
                        <ul className="listaTEMD">
                            {this.props.atropellamiento ? (
                                <li> Atropellamiento </li>
                            ) : null}
                            {this.props.tvt ? <li> TVT </li> : null}
                            {this.props.sarnaPiel ? (
                                <li> Sarna Piel </li>
                            ) : null}
                            {this.props.viral ? <li> Viral </li> : null}
                            {this.props.embarazo ? <li> Embarazo </li> : null}
                            {this.props.cachorros ? <li> Cachorros </li> : null}
                            {this.props.hemoparasitos ? (
                                <li> Hemoparasitos </li>
                            ) : null}
                            {this.props.otro && this.props.otro.length ? (
                                <li> {this.props.otro} </li>
                            ) : null}
                        </ul>
                    </div>

                    <div className="vacunasTEM">
                        <div className="nombreSeccionT">
                            <i
                                aria-hidden="true"
                                className="fa fa-medkit fa-fw iconoTarjeta"
                            ></i>
                            <span className="nombreCampo">
                                {" "}
                                Vacunas Recibidas:{" "}
                            </span>
                        </div>
                        {!this.props.vacuna1 &&
                        !this.props.vacuna2 &&
                        !this.props.vacuna3 &&
                        !this.props.vacuna4 &&
                        !this.props.vacuna5 ? (
                            <div
                                style={{ paddingTop: "2vh", textAlign: "left" }}
                            >
                                {" "}
                                {"Ninguna"}{" "}
                            </div>
                        ) : null}
                        <ul className="listaTEMV">
                            {this.props.vacuna1 ? (
                                <li>
                                    {" "}
                                    {this.decodificarVacuna(
                                        "Vacuna1",
                                        this.props.especie
                                    )}{" "}
                                </li>
                            ) : null}
                            {this.props.vacuna2 ? (
                                <li>
                                    {" "}
                                    {this.decodificarVacuna(
                                        "Vacuna2",
                                        this.props.especie
                                    )}{" "}
                                </li>
                            ) : null}
                            {this.props.vacuna3 ? (
                                <li>
                                    {" "}
                                    {this.decodificarVacuna(
                                        "Vacuna3",
                                        this.props.especie
                                    )}{" "}
                                </li>
                            ) : null}
                            {this.props.vacuna4 ? (
                                <li>
                                    {" "}
                                    {this.decodificarVacuna(
                                        "Vacuna4",
                                        this.props.especie
                                    )}{" "}
                                </li>
                            ) : null}
                            {this.props.vacuna5 ? (
                                <li>
                                    {" "}
                                    {this.decodificarVacuna(
                                        "Vacuna5",
                                        this.props.especie
                                    )}{" "}
                                </li>
                            ) : null}
                        </ul>
                    </div>

                    <div className="esterilizadoTEM">
                        <i
                            aria-hidden="true"
                            className="fa fa-user-md fa-fw iconoTarjeta"
                        ></i>
                        <span className="nombreCampo"> Esterilizado: </span>
                        <span className="campoData">
                            {" "}
                            {this.bool2string(this.props.estaEsterilizado)}{" "}
                        </span>
                    </div>

                    <div className="citaAgendadaTEM">
                        <i
                            aria-hidden="true"
                            className="fa fa-calendar-o fa-fw iconoTarjeta"
                        ></i>
                        <span className="nombreCampo"> Cita Agendada: </span>
                        <span className="campoData">
                            {" "}
                            {this.props.citaAgendada &&
                            this.props.citaAgendada.length
                                ? this.props.citaAgendada
                                : "No hay Información"}{" "}
                        </span>
                    </div>
                    <div className="fechaEsterilizacionTEM">
                        <i
                            aria-hidden="true"
                            className="fa fa-calendar fa-fw iconoTarjeta"
                        ></i>
                        <span className="nombreCampo">
                            {" "}
                            Fecha de Esterilización:{" "}
                        </span>
                        <span className="campoData">
                            {" "}
                            {this.props.formatDate(
                                this.props.fechaEsterilizacion
                            )}{" "}
                        </span>
                    </div>
                </div>
                <div className="panelConfiguracionT">
                    <Link to={"/Laika/ExpedienteMedico?id=" + this.props.id}>
                        <button className="editarTarjeta" title="Editar">
                            <i
                                aria-hidden="true"
                                className="fa fa-edit fa-fw"
                            ></i>
                        </button>
                    </Link>

                    <BotonPDF
                        id={this.props.id}
                        openModal={this.props.openModal}
                        setID={this.props.setID}
                        foto={this.props.foto}
                    />
                </div>
            </div>
        );
    }
}
