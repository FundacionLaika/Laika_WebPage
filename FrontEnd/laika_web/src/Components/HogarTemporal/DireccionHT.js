import React, { Component } from 'react';

class DireccionHT extends Component {
    state = {
        calleHT: "",
        numeroHT: "",
        coloniaHT: "",
        municipioHT: ""
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
                <label>Dirección</label><br/>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor = "calleHT">Calle: </label>
                                <input type = "text" id = "calleHT" name = "calleHT" value = {this.state.calleHT} onChange = {this.handleChange}/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "numeroHT">Número: </label>
                                <input type = "text" id = "numeroHT" name = "numeroHT" value = {this.state.numeroHT} onChange = {this.handleChange}/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "coloniaHT">Colonia: </label>
                                <input type = "text" id = "coloniaHT" name = "coloniaHT" value = {this.state.coloniaHT} onChange = {this.handleChange}/><br/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor = "municipioHT">Municipio: </label>
                                <input type = "text" id = "municipioHT" name = "municipioHT" value = {this.state.municipioHT} onChange = {this.handleChange}/><br/> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DireccionHT;