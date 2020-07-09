import React, { Component } from 'react';

class ContactoHT extends Component {
    state = {
        tipoHT:"",
        nombre: "",
        telefono: "",
        fechaInicioHT: new Date(),
        fechaFinalHT: new Date()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name);
    }

    render() {
        return (
            <div>
                <label htmlFor = "tipoHT">Seleccionar tipo de HT: </label>
                <select name = "tipoHT" id = "tipoHT" value = {this.state.tipoHT} onChange = {this.handleChange}>
                    <option value= "Persona">Persona</option>
                    <option value= "Veterinaria">Veterinaria</option>
                </select><br/><br/>
                <label htmlFor = "nombreHT">Nombre: </label>
                <input type = "text" id = "nombreHT" name = "nombreHT" value = {this.state.nombre} onChange = {this.handleChange}/><br/>
                <label htmlFor = "telefonoHT">Teléfono: </label>
                <input type = "text" id = "telefonoHT" name = "telefonoHT" value = {this.state.telefono} onChange = {this.handleChange}/>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha Inicio</th>
                            <th>Fecha Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type = "date" id = "fechaInicioHT" name = "fechaInicioHT" value = {this.state.fechaInicioHT} onChange = {this.handleChange}/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaFinalHT" name = "fechaFinalHT" value = {this.state.fechaFinalHT} onChange = {this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactoHT;