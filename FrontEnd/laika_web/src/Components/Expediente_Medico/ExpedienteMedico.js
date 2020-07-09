import React,{Component} from 'react';
import Diagnostico from './Diagnostico';
import Esterilizacion from './Esterilizacion';
import CartillaVacunacion from './CartillaVacunacion';
import Tratamiento from './Tratamiento';
import FotosExpedienteMedico from './FotosExpedienteMedico';

class ExpedienteMedico extends Component {
    preventDefault = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <Diagnostico /><br/>
                <Esterilizacion/><br/>
                <CartillaVacunacion/><br/>
                <Tratamiento/><br/>
                <FotosExpedienteMedico/>
                <button type = "submit" onClick = {this.preventDefault}>Guardar</button>
            </form>
        );
    }
}

export default ExpedienteMedico;