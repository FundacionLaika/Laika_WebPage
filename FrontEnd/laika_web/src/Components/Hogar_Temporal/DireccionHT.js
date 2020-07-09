import React, { Component } from 'react';

class DireccionHT extends Component {
    render() {
        return (
            <div>
                <label>Dirección</label><br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor = "calleHT">Calle: </label>
                                <input type = "text" id = "calleHT" name = "calleHT"/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "numeroHT">Número: </label>
                                <input type = "text" id = "numeroHT" name = "numeroHT"/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "coloniaHT">Colonia: </label>
                                <input type = "text" id = "coloniaHT" name = "coloniaHT"/><br/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "municipioHT">Municipio: </label>
                                <input type = "text" id = "municipioHT" name = "municipioHT"/><br/> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DireccionHT;