import React from "react";
import Rescatistas from "./Subcomponents/Rescatistas";
import DatosGeneralesRG from "./Subcomponents/DatosGeneralesRG";
import ModalEliminar from "./Subcomponents/ModalEliminar";
import Direccion from "../SharedComponents/Direccion";
import Foto from "../SharedComponents/Foto";
import NavBarRegistros from "../SharedComponents/NavBarRegistros";
import { Link, withRouter } from "react-router-dom";
import "./Styles/RegistroGeneral.css";
import queryString from "query-string";
import { validationRG } from "./Functions/ValidationRG";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Collapse from "@material-ui/core/Collapse";
import Alert from "@material-ui/lab/Alert";
import ErrorPage from "../SharedComponents/ErrorPage";

class RegistroGeneral extends React.Component {
    state = {
        id: "",
        nombre: "",
        edad: "",
        genero: "",
        especie: "",
        fechaDeRescate: null,
        estatus: "",
        calle: "",
        numero: "",
        colonia: "",
        municipio: "",
        senasParticulares: "",
        foto: null,
        rescatistas: [],

        openError: false,
        openSuccess: false,
        msg: "",
        showErrorPage: false,
    };

    restablecido = false;
    estaRegistrado = false;

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleDate = (fecha, name) => {
        this.setState({
            [name]: fecha,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.estaRegistrado ? this.updateDB() : this.insertDB();
    };

    insertDB = () => {
        fetch("http://localhost:3001/registroGeneral", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .then((ID_Animal) => {
                console.log(ID_Animal);
                this.props.location.search = "/Laika/RegistroGeneral?id='+ID_Animal";
                this.props.history.push('/Laika/RegistroGeneral?id='+ID_Animal);
            })
            .catch((err) => console.log(err));
    };

    updateDB = () => {
        fetch("http://localhost:3001/registroGeneral", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state),
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    };

    agregarRescatista = (rescatista) => {
        if (rescatista.text !== "") {
            this.setState((state) => ({
                rescatistas: [rescatista, ...state.rescatistas],
            }));
        }
    };

    eliminarRescatista = (id) => {
        this.setState((state) => ({
            rescatistas: state.rescatistas.filter(
                (rescatista) => rescatista.id !== id
            ),
        }));
    };

    imageHandler = (event) => {
        try {
            const reader = new FileReader();
            const foto = event.target.id;

            reader.onload = () => {
                if (reader.readyState === 2) {
                    this.setState({ [foto]: reader.result });
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        } catch (error) {}
    };

    handleRestablecer = () => {
        if (this.estaRegistrado) this.fetchData();
        else {
            this.setState({
                id: "",
                nombre: "",
                edad: "",
                genero: "",
                especie: "",
                fechaDeRescate: null,
                estatus: "",
                calle: "",
                numero: "",
                colonia: "",
                municipio: "",
                senasParticulares: "",
                foto: null,
                rescatistas: [],
                showErrorPage: false,
              
              	openError: false,
                openSuccess: false,
                msg: "",
            });
        }
    };

    fetchData = () => {
        let url = this.props.location.search;
        let params = queryString.parse(url);

        
        this.setState({
            id: params.id
        });
		

        fetch("http://localhost:3001/registroGeneral/?id=" + params.id, {
            method: "get",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((response) => {
                if (Object.keys(response).length === 1) {
                    this.setState({
                        showErrorPage: true,
                    });
                    return;
                }
                for (const element in response) {
                    if (element.includes("fecha")) {
                        const date = response[element];
                        if (!date || date === "" || date === "0000-00-00")
                            continue;
                        this.setState({
                            [element]: new Date(date),
                        });
                    } else if (element.includes("foto")) {
                        if (response[element]) {
                            var buffer = Buffer.from(response[element].data);

                            this.setState({
                                [element]: buffer.toString("utf8"),
                            });
                        }
                    } else {
                        this.setState({
                            [element]: response[element],
                        });
                    }
                }
            })
            .catch((err) => console.log(err));
    };



    componentDidUpdate() {
        let url = this.props.location.search;
        let params = queryString.parse(url);

        this.estaRegistrado = params.id ? true : false;

        if (!this.estaRegistrado && !this.restablecido) {
            this.restablecido = true;
            this.handleRestablecer();
        }
    }

    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);

        this.setState({
            estaRegistrado: params.id ? true : false,
        });

        if (params.id) {
            this.fetchData();
        }
    }

    handleAlert(e, msg) {
        if (e === "openSuccess") {
            this.setState({
                ...this.state,
                openError: false,
                openSuccess: true,
            });
        } else if (e === "openError") {
            this.setState({
                ...this.state,
                openError: true,
                openSuccess: false,
                msg: msg,
            });
        }
    }

    render() {
        let url = this.props.location.search;
        let params = queryString.parse(url);

        if (this.state.showErrorPage) return <ErrorPage />;
        return (
            <div className="RegistroGeneral">
                {this.estaRegistrado ? (
                    <div className="NavBarRegistrosGeneral">
                        <NavBarRegistros
                            tabIndicatorPosition={"0%"}
                            activePosition={"RegistroGeneral"}
                            id={params.id}
                        />
                    </div>
                ) : null}

                <div
                    className="FormularioGeneral" style={{height: this.estaRegistrado ? "80vh" : "85.98245614vh"}}
                >
                    <div className="alertRG">
                        <Collapse in={this.state.openError}>
                            <Alert
                                onClose={() => {
                                    this.setState({
                                        ...this.state,
                                        openError: false,
                                    });
                                }}
                                variant="outlined"
                                severity="error"
                            >
                                <AlertTitle>
                                    Error - Faltan llenar los siguientes campos
                                </AlertTitle>
                                {this.state.msg}
                            </Alert>
                        </Collapse>

                        <Collapse in={this.state.openSuccess}>
                            <Alert
                                onClose={() => {
                                    this.setState({
                                        ...this.state,
                                        openSuccess: false,
                                    });
                                }}
                                variant="outlined"
                                severity="success"
                            >
                                <AlertTitle>Datos guardados</AlertTitle>
                            </Alert>
                        </Collapse>
                    </div>
                    <div className="DatosGenerales">
                        <DatosGeneralesRG
                            handleChange={this.handleChange}
                            handleDate={this.handleDate}
                            nombre={this.state.nombre}
                            edad={this.state.edad}
                            genero={this.state.genero}
                            especie={this.state.especie}
                            fechaDeRescate={this.state.fechaDeRescate}
                            estatus={this.state.estatus}
                        />
                    </div>
                    <div className="Rescatistas">
                        <Rescatistas
                            rescatistas={this.state.rescatistas}
                            agregarRescatista={this.agregarRescatista}
                            eliminarRescatista={this.eliminarRescatista}
                        />
                    </div>
                    <div className="DireccionGeneral">
                        <Direccion
                            handleChange={this.handleChange}
                            calle={this.state.calle}
                            numero={this.state.numero}
                            colonia={this.state.colonia}
                            municipio={this.state.municipio}
                        />
                    </div>
                    <div className="SenasParticulares">
                        <div className="form-field">
                            <div className="form-field__control">
                                <textarea
                                    id="senasParticulares"
                                    className="form-field__textarea"
                                    placeholder=" "
                                    rows="4"
                                    name="senasParticulares"
                                    value={this.state.senasParticulares}
                                    onChange={this.handleChange}
                                ></textarea>
                                <label
                                    htmlFor="senasParticulares"
                                    className="form-field__label"
                                >
                                    Señas Particulares
                                </label>
                                <div className="form-field__bar"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="BotonesRegistroGeneral">
                    <Link to={"/Laika/Adopcion" + this.props.location.search}>
                        <button className="BotonGeneralTransicion BotonAnteriorGeneral">
                            <i
                                aria-hidden="true"
                                className="fa fa-chevron-circle-left fa-fw"
                            ></i>
                            Adopcion
                        </button>
                    </Link>

                    <button
                        className="BotonGeneralRestablecer BotonCentralGeneral"
                        onClick={this.handleRestablecer}
                    >
                        Restablecer
                        <i
                            aria-hidden="true"
                            className="fa fa-eraser fa-fw"
                        ></i>
                    </button>
                    <button
                        className="BotonGeneralGuardar BotonCentralGeneral"
                        onClick={(event) => {
                            const alert = validationRG(this.state);
                            if (alert.isValid) {
                                this.handleSubmit(event);
                                this.handleAlert("openSuccess");
                            } else {
                                this.handleAlert("openError", alert.msg);
                            }
                        }}
                    >
                        {this.estaRegistrado ? "Guardar" : "Registrar"}
                        <i aria-hidden="true" className="fa fa-save fa-fw"></i>
                    </button>
                    {this.estaRegistrado ? <ModalEliminar /> : null}

                    <Link
                        to={
                            "/Laika/ExpedienteMedico" +
                            this.props.location.search
                        }
                    >
                        <button className="BotonGeneralTransicion BotonSiguienteGeneral">
                            Expediente Médico
                            <i className="fa fa-chevron-circle-right fa-fw"></i>
                        </button>
                    </Link>
                </div>

                <div className="BarraLateralGeneral">
                    <div className="idLabelGeneral">
                        <label>ID:{this.state.id}</label>
                    </div>
                    <div className="fotoGeneral">
                        <Foto
                            id="foto"
                            foto={this.state.foto}
                            imageHandler={this.imageHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }

}
export default withRouter(RegistroGeneral);
