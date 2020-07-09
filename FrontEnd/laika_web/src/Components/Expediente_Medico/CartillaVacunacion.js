import React, { Component } from 'react';

class CartillaVacunacion extends Component {
    render() {
        return (
            <div>
                <label>Cartilla de vacunación</label>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" id = "Puppy" name = "Puppy" value = "Puppy"/>
                                <label htmlFor = "Puppy">Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "RefuerzoPuppy" name = "RefuerzoPuppy" value = "RefuerzoPuppy"/>
                                <label htmlFor = "RefuerzoPuppy">Refuerzo Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "Multiple" name = "Multiple" value = "Multiple"/>
                                <label htmlFor = "Multiple">Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "RefuerzoMutiple" name = "RefuerzoMultiple" value = "RefuerzoMultiple"/>
                                <label htmlFor = "RefuerzoMultiple">Refuerzo Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "Rabia" name = "Rabia" value = "Rabia"/>
                                <label htmlFor = "Rabia">Rabia</label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type = "date" id = "fechaPuppy" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRefuerzoPuppy" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaMultiple" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRefuerzoMultiple" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaRabia" name = "fecha"/>
                            </td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        );
    }
}

export default CartillaVacunacion;