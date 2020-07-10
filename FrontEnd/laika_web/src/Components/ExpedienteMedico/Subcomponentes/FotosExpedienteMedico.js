import React, { Component } from "react";
import Foto from "./Foto";

class FotosExpedienteMedico extends Component {
  render() {
    return (
      <div>
        <label>Fotos</label>
        <table>
          <tbody>
            <tr>
              <td>
                <Foto />
              </td>
              <td>
                <Foto />
              </td>
              <td>
                <Foto />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FotosExpedienteMedico;
