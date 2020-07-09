import React,{Component} from 'react';
import Diagnostico from './Diagnostico';
import Esterilizacion from './Esterilizacion';
import CartillaVacunacion from './CartillaVacunacion';
import Foto from './Foto';

class ExpedienteMedico extends Component {
    render() {
        return (
            <form>
                <Diagnostico /><br/>
                <Esterilizacion/><br/>
                <CartillaVacunacion/><br/>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><Foto/></td>
                                <td><Foto/></td>
                                <td><Foto/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type = "submit">Guardar</button>
            </form>
        );
    }
}

export default ExpedienteMedico;