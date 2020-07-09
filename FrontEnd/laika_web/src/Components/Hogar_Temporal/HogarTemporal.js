import React, { Component } from 'react';
import ContactoHT from './ContactoHT';
import DireccionHT from './DireccionHT';
import ComentariosHT from './ComentariosHT';
import FotoHT from './FotoHT';

class HogarTemporal extends Component {
    render() {
        return (
            <form>
                <label>Hogar HogarTemporal</label><br/><br/>
                <ContactoHT/>
                <DireccionHT/>
                <ComentariosHT/>
                <FotoHT/>
                <button type = "submit">Guardar</button>
            </form>
        );
    }
}

export default HogarTemporal;