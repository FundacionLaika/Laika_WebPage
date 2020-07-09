import React, { Component } from 'react';

class Tratamiento extends Component {
    render() {
        return (
            <div>
                <label>Tratamiento</label>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha Inicio</th>
                            <th>Fecha Final</th>
                            <th>Comentarios</th>
                            <th>Acción</th>
                            <th>Cita Médica</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type = "date" id = "fechaInicio" name = "fecha"/>
                            </td>
                            <td>
                                <input type = "date" id = "fechaFinal" name = "fecha"/>
                            </td>
                            <td>
                                Agus es gay
                            </td>
                            <td>
                                Agus es gay
                            </td>
                            <td>
                                <input type = "date" id = "citaMedica" name = "fecha"/>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        );
    }
}

export default Tratamiento;