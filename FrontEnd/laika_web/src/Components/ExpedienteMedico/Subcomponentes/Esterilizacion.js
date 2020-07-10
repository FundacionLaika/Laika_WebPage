import React,{Component} from 'react';

class Esterilizacion extends Component {
    state = {
        esterilizado: "",
        citaEsterilizacion: "",
        fechaEsterilizacion: new Date()
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });
        console.log(event.target.name);
        console.log(value);
    }

    render() {
        return (
            <div>
                <label>Esterilización</label><br/>
                <label>Esterilizado</label>
                <input type = "radio" id = "esterilizadoSi" name = "esterilizado" value = "si" checked = {this.state.esterilizado === "si"} onChange = {this.handleChange}/>
                <label htmlFor = "esterilizadoSi">Sí</label>
                <input type = "radio" id = "esterilizadoNo" name = "esterilizado" value = "no" checked = {this.state.esterilizado === "no"} onChange = {this.handleChange}/>
                <label htmlFor = "esterilzadoNo">No</label>
                
                <label>¿Desea agendar cita?</label>
                <input type = "radio" id = "citaEsterilizadoSi" name = "citaEsterilizacion" value = "si" checked = {this.state.citaEsterilizacion === "si"} onChange = {this.handleChange}/>
                <label htmlFor = "citaEsterilizadoSi">Sí</label>
                <input type = "radio" id = "citaEsterilizadoNo" name = "citaEsterilizacion" value = "no" checked = {this.state.citaEsterilizacion === "no"} onChange = {this.handleChange}/>
                <label htmlFor = "citaEsterilizadoNo">No</label>

                <input type = "date" id = "fechaEsterilizacion" name = "fechaEsterilizacion" onChange = {this.handleChange}/>
            </div>
        );
    }
}

export default Esterilizacion;