import React, { Component } from 'react';

class CartillaVacunacion extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" id = "Puppy" name = "Puppy" value = "Puppy"/>
                                <label for = "Puppy">Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "RefuerzoPuppy" name = "RefuerzoPuppy" value = "RefuerzoPuppy"/>
                                <label for = "RefuerzoPuppy">Refuerzo Puppy</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "Multiple" name = "Multiple" value = "Multiple"/>
                                <label for = "Multiple">Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "RefuerzoMutiple" name = "RefuerzoMultiple" value = "RefuerzoMultiple"/>
                                <label for = "RefuerzoMultiple">Refuerzo Múltiple</label>
                            </td>
                            <td>
                                <input type="checkbox" id = "Rabia" name = "Rabia" value = "Rabia"/>
                                <label for = "Rabia">Rabia</label>
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