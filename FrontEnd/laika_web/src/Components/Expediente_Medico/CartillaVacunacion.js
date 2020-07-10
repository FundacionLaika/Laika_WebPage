import React, { Component } from 'react';

class CartillaVacunacion extends Component {
    state = {
        puppy: false,
        refuerzoPuppy: false,
        multiple: false,
        refuerzoMultiple: false,
        rabia: false,
        fechaPuppy: new Date(),
        fechaRefuerzoPuppy: new Date(),
        fechaMultiple: new Date(),
        fechaRefuerzoMultiple: new Date(),
        fechaRabia: new Date()
    }

    handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            ...this.state,
            [event.target.id]: value
        });
        console.log(event.target.id);
        console.log(value);
    }
    
    render() {
        return (
            <div>
                <label>Cartilla de vacunación</label>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" id = "puppy" name = "puppy" value = "puppy" checked = {this.state.puppy} onChange = {this.handleChange}/>
                                <label htmlFor = "puppy">Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "refuerzoPuppy" name = "RefuerzoPuppy" value = "refuerzoPuppy" checked = {this.state.refuerzoPuppy} onChange = {this.handleChange}/>
                                <label htmlFor = "refuerzoPuppy">Refuerzo Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "multiple" name = "multiple" value = "multiple" checked = {this.state.multiple} onChange = {this.handleChange}/>
                                <label htmlFor = "multiple">Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "refuerzoMultiple" name = "refuerzoMultiple" value = "refuerzoMultiple" checked = {this.state.refuerzoMultiple} onChange = {this.handleChange}/>
                                <label htmlFor = "refuerzoMultiple">Refuerzo Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "rabia" name = "rabia" value = "rabia" checked = {this.state.rabia} onChange = {this.handleChange}/>
                                <label htmlFor = "rabia">Rabia</label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type = "date" id = "fechaPuppy" name = "fecha" value = {this.state}onChange = {this.handleChange}/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRefuerzoPuppy" name = "fecha" onChange = {this.handleChange}/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaMultiple" name = "fecha" onChange = {this.handleChange}/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRefuerzoMultiple" name = "fecha" onChange = {this.handleChange}/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRabia" name = "fecha" onChange = {this.handleChange}/>
                            </td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        );
    }
}

export default CartillaVacunacion;