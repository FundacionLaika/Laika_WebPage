import React, { Component } from "react";
import Foto from "../../SharedComponents/Foto";

class FotosExpedienteMedico extends Component {
  render() {
    return (
      <div>
        <label>Fotos</label>
        <table>
          <tbody>
            <tr>
              <td>
                <Foto
                  id="foto1"
                  foto={this.props.foto1}
                  imageHandler={this.props.imageHandler}
                />
              </td>
              <td>
                <Foto
                  id="foto2"
                  foto={this.props.foto2}
                  imageHandler={this.props.imageHandler}
                />
              </td>
              <td>
                <Foto
                  id="foto3"
                  foto={this.props.foto3}
                  imageHandler={this.props.imageHandler}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FotosExpedienteMedico;
