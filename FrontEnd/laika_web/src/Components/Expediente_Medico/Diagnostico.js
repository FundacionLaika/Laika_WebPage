import React,{Component} from 'react';

class Diagnostico extends Component {
    state = {
        atropellamiento: false,
        tvt: false,
        sarnaPiel: false,
        viral: false,
        embarazo: false,
        cachorros: false,
        hemoparasitos: false,
        otro: false,
        otroEspecificar: ""
    }

    handleChange = (event) => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
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
                <label>Diagnóstico</label><br/>
                <input type="checkbox" id = "atropellamiento" name = "atropellamiento" value = "atropellamiento" checked = {this.state.atropellamiento} onChange = {this.handleChange}/>
                <label htmlFor = "atropellamiento">Atropellamiento</label><br/>
                <input type="checkbox" id = "tvt" name = "tvt" value = "tvt" checked = {this.state.tvt} onChange = {this.handleChange}/>
                <label htmlFor = "tvt">TVT</label><br/>
                <input type="checkbox" id = "sarnaPiel" name = "sarnaPiel" value = "sarnaPiel" checked = {this.state.sarnaPiel} onChange = {this.handleChange}/>
                <label htmlFor = "sarnaPiel">Sarna/Piel</label><br/>
                <input type="checkbox" id = "viral" name = "viral" value = "viral" checked = {this.state.viral} onChange = {this.handleChange}/>
                <label htmlFor = "viral">Viral</label><br/>       
                <input type="checkbox" id = "embarazo" name = "embarazo" value = "embarazo" checked = {this.state.embarazo} onChange = {this.handleChange}/>
                <label htmlFor = "embarazo">Embarazo</label><br/>
                <input type="checkbox" id = "cachorros" name = "cachorros" value = "cachorros" checked = {this.state.cachorros} onChange = {this.handleChange}/>
                <label htmlFor = "cachorros">Cachorros</label><br/>
                <input type="checkbox" id = "hemoparasitos" name = "hemoparasitos" value = "hemoparasitos" checked = {this.state.hemoparasitos} onChange = {this.handleChange}/>
                <label htmlFor = "hemoparasitos">Hemoparásitos</label><br/>
                <input type="checkbox" id = "otro" name = "otro" value = "otro" checked = {this.state.otro} onChange = {this.handleChange}/>
                <label htmlFor = "otro">Otro</label><br/>
                <label htmlFor = "otroEspecificar">Especificar</label>
                <input type = "text" id = "otroEspecificar" name = "otroEspecificar" onChange = {this.handleChange}/>
            </div>
        );
    }
}

export default Diagnostico;