import React, { Component } from "react";
import Foto from "./Foto";

class FotosExpedienteMedico extends Component {
  state = {
    foto1: "foto1",
    foto2: "foto2",
    foto3: "foto3",
  }

  render() {
    return (
      <div>
        <label>Fotos</label>
        <table>
          <tbody>
            <tr>
              <td>
                <Foto id={1}/>
              </td>
              <td>
                <Foto id={2}/>
              </td>
              <td>
                <Foto id={3}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FotosExpedienteMedico;
