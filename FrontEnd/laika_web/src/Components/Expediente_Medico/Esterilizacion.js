import React,{Component} from 'react';

class Esterilizacion extends Component {
    render() {
        return (
            <div>
                <label>Esterilizado</label>
                <input type = "radio" id = "esterilizadoSi" name = "esterilizado"/>
                <label for = "esterilizadoSi">Sí</label>
                <input type = "radio" id = "esterilizadoNo" name = "esterilizado"/>
                <label for = "esterilzadoNo">No</label>

                <label>¿Desea agendar cita?</label>
                <input type = "radio" id = "citaEsterilizadoSi" name = "citaEsterilizacion"/>
                <label for = "citaEsterilizadoSi">Sí</label>
                <input type = "radio" id = "citaEsterilizadoNo" name = "citaEsterilizacion"/>
                <label for = "citaEsterilizadoNo">No</label>

                <input type = "date" id = "Date" name = "Date"/>
            </div>
        );
    }
}

export default Esterilizacion;