import React,{Component} from 'react';

class Esterilizacion extends Component {
    render() {
        return (
            <div>
                <label>Esterilización</label><br/>
                <label>Esterilizado</label>
                <input type = "radio" id = "esterilizadoSi" name = "esterilizado"/>
                <label htmlFor = "esterilizadoSi">Sí</label>
                <input type = "radio" id = "esterilizadoNo" name = "esterilizado"/>
                <label htmlFor = "esterilzadoNo">No</label>

                <label>¿Desea agendar cita?</label>
                <input type = "radio" id = "citaEsterilizadoSi" name = "citaEsterilizacion"/>
                <label htmlFor = "citaEsterilizadoSi">Sí</label>
                <input type = "radio" id = "citaEsterilizadoNo" name = "citaEsterilizacion"/>
                <label htmlFor = "citaEsterilizadoNo">No</label>

                <input type = "date" id = "Date" name = "Date"/>
            </div>
        );
    }
}

export default Esterilizacion;