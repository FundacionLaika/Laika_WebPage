import React, { Component } from 'react';
import ContactoHT from './ContactoHT';
import DireccionHT from './DireccionHT';
import ComentariosHT from './ComentariosHT';
import FotoHT from './FotoHT';

class HogarTemporal extends Component {
    state = {
        tipoHT:"",
        nombre: "",
        telefono: "",
        fechaInicio: "",
        fechaFinal: "",
        calle: "",
        numero: "",
        colonia: "",
        municipio: ""
    }

    handleContactotHT = (event) => {
        this.setState({
            
        });
    }

    render() {
        return (
            <form>
                <label>Hogar HogarTemporal</label><br/><br/>
                <ContactoHT onChange = {this.handleContactotHT}/>
                <DireccionHT/>
                <ComentariosHT/>
                <FotoHT/>
                <button type = "submit" onClick = {this.handleSubmit}>Guardar</button>
            </form>
        );
    }
}

export default HogarTemporal;