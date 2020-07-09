import React, { Component } from 'react';

class ContactoHT extends Component {
    render() {
        return (
            <div>
                <label htmlFor = "tipoHT">Seleccionar tipo de HT: </label>
                <select name = "tipoHT" id = "tipoHT">
                    <option value= "Persona">Persona</option>
                    <option value= "Veterinaria">Veterinaria</option>
                </select><br/><br/>
                <label htmlFor = "nombreHT">Nombre: </label>
                <input type = "text" id = "nombreHT" name = "nombreHT"/><br/>
                <label htmlFor = "telefonoHT">Teléfono: </label>
                <input type = "text" id = "telefonoHT" name = "telefonoHT"/>
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
                                <input type = "date" id = "fechaInicioHT" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaFinalHT" name = "fecha"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ContactoHT;