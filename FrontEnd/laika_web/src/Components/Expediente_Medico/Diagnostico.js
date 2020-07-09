import React,{Component} from 'react';

class Diagnostico extends Component {
    render() {
        return (
            <div>
                <label>Diagnóstico</label><br/>
                <input type="checkbox" id = "atropellamiento" name = "atropellamiento" value = "atropellamiento"/>
                <label htmlFor = "atropellamiento">Atropellamiento</label><br/>
                <input type="checkbox" id = "tvt" name = "tvt" value = "tvt"/>
                <label htmlFor = "tvt">TVT</label><br/>
                <input type="checkbox" id = "sarnaPiel" name = "sarnaPiel" value = "sarnaPiel"/>
                <label htmlFor = "sarnaPiel">Sarna/Piel</label><br/>
                <input type="checkbox" id = "viral" name = "viral" value = "viral"/>
                <label htmlFor = "viral">Viral</label><br/>       
                <input type="checkbox" id = "embarazo" name = "embarazo" value = "embarazo"/>
                <label htmlFor = "embarazo">Embarazo</label><br/>
                <input type="checkbox" id = "cachorros" name = "cachorros" value = "cachorros"/>
                <label htmlFor = "cachorros">Cachorros</label><br/>
                <input type="checkbox" id = "hemoparasitos" name = "hemoparasitos" value = "hemoparasitos"/>
                <label htmlFor = "hemoparasitos">Hemoparásitos</label><br/>
                <input type="checkbox" id = "otro" name = "otro" value = "otro"/>
                <label htmlFor = "otro">Otro</label><br/>
                <label htmlFor = "otroEspecificar">Especificar</label>
                <input type = "text" id = "otroEspecificar" name = "otroESpecificar"/>
            </div>
        );
    }
}

export default Diagnostico;