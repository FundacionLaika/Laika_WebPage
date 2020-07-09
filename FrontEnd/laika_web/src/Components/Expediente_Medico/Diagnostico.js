import React,{Component} from 'react';

class Diagnostico extends Component {
    render() {
        return (
            <div>
                <label>Diagnóstico</label><br/>
                <input type="checkbox" id = "atropellamiento" name = "atropellamiento" value = "atropellamiento"/>
                <label for = "atropellamiento">Atropellamiento</label><br/>
                <input type="checkbox" id = "tvt" name = "tvt" value = "tvt"/>
                <label for = "tvt">TVT</label><br/>
                <input type="checkbox" id = "sarnaPiel" name = "sarnaPiel" value = "sarnaPiel"/>
                <label for = "sarnaPiel">Sarna/Piel</label><br/>
                <input type="checkbox" id = "viral" name = "viral" value = "viral"/>
                <label for = "viral">Viral</label><br/>       
                <input type="checkbox" id = "embarazo" name = "embarazo" value = "embarazo"/>
                <label for = "embarazo">Embarazo</label><br/>
                <input type="checkbox" id = "cachorros" name = "cachorros" value = "cachorros"/>
                <label for = "cachorros">Cachorros</label><br/>
                <input type="checkbox" id = "hemoparasitos" name = "hemoparasitos" value = "hemoparasitos"/>
                <label for = "hemoparasitos">Hemoparásitos</label><br/>
                <input type="checkbox" id = "otro" name = "otro" value = "otro"/>
                <label for = "otro">Otro</label><br/>
                <label for = "otroEspecificar">Especificar</label>
                <input type = "text" id = "otroEspecificar" name = "otroESpecificar"/>
            </div>
        );
    }
}

export default Diagnostico;