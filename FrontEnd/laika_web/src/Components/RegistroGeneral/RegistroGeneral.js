import React from "react";
import Rescatistas from "./Rescatistas";

export default class RegistroGeneral extends React.Component {
    state = {
        nombre: "",
        edad: "",
        genero: "",
        especie: "",
        fechaDeRescate: new Date(),
        rescatistas: [],
        calle: "",
        numero: "",
        colonia: "",
        municipio: "",
        senasParticulares: "",
        imagen: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };

    agregarRescatista = rescatista => {
    	this.setState(state => ({
      		rescatistas: [rescatista, ...state.rescatistas]
    	}));
  	};

  	eliminarRescatista = id => {
    	this.setState(state => ({
      		rescatistas: state.rescatistas.filter(rescatista => rescatista.id !== id)
    	}));
  	};


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.handleChange}
                />
                <input
                    name="edad"
                    value={this.state.edad}
                    onChange={this.handleChange}
                />

                <div>
                    <input 
                        type="radio" 
                        value="Macho" 
                        name="genero"
                        checked={this.state.genero === "Macho"} 
                        onChange={this.handleChange}
                    /> Macho

                    <input 
                        type="radio" 
                        value="Hembra" 
                        name="genero"
                        checked={this.state.genero === "Hembra"} 
                        onChange={this.handleChange}
                    /> Hembra
                </div>

                <div>
                    <input 
                        type="radio" 
                        value="Canino" 
                        name="especie"
                        checked={this.state.especie === "Canino"} 
                        onChange={this.handleChange}
                    /> Canino

                    <input 
                        type="radio" 
                        value="Felino" 
                        name="especie"
                        checked={this.state.especie === "Felino"} 
                        onChange={this.handleChange}
                    /> Felino

                    <input 
                        type="radio" 
                        value="Otro" 
                        name="especie"
                        checked={this.state.especie === "Otro"} 
                        onChange={this.handleChange}
                    /> Otro
                </div>

                <input 
                    type="date" 
                    name="fechaDeRescate" 
                    value={this.state.fechaDeRescate} 
                    onChange={this.handleChange} 
                />

                <Rescatistas 
                    rescatistas={this.state.rescatistas} 
                    agregarRescatista={this.agregarRescatista} 
                    eliminarRescatista={this.eliminarRescatista}
                />

                <input
                    name="calle"
                    value={this.state.calle}
                    onChange={this.handleChange}
                />

                <input
                    name="numero"
                    value={this.state.numero}
                    onChange={this.handleChange}
                />

                <input
                    name="colonia"
                    value={this.state.colonia}
                    onChange={this.handleChange}
                />

                <input
                    name="municipio"
                    value={this.state.municipio}
                    onChange={this.handleChange}
                />

                <textarea 
                    name="senasParticulares" 
                    value={this.props.senasParticulares}
                    onChange={this.handleChange}
                />

            <button type="submit">Registrar</button>
        </form>
    );
  }
}