import React from 'react';
import './App.css';
import ExpedienteMedico from '../Components/Expediente_Medico/ExpedienteMedico';
import HogarTemporal from '../Components/Hogar_Temporal/HogarTemporal';

function App() {
  return (
    <div className="App">
      <ExpedienteMedico/><br/>
      <HogarTemporal/>
    </div>
  );
}

export default App;
