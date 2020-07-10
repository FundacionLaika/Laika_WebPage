import React, { Component } from "react";

class CartillaVacunacion extends Component {
  render() {
    return (
      <div>
        <label>Cartilla de vacunación</label>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  id="puppy"
                  name="puppy"
                  value="puppy"
                  checked={this.props.puppy}
                  onChange={this.props.handleChange}
                />
                <label htmlFor="puppy">Puppy</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="refuerzoPuppy"
                  name="RefuerzoPuppy"
                  value="refuerzoPuppy"
                  checked={this.props.refuerzoPuppy}
                  onChange={this.props.handleChange}
                />
                <label htmlFor="refuerzoPuppy">Refuerzo Puppy</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="multiple"
                  name="multiple"
                  value="multiple"
                  checked={this.props.multiple}
                  onChange={this.props.handleChange}
                />
                <label htmlFor="multiple">Múltiple</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="refuerzoMultiple"
                  name="refuerzoMultiple"
                  value="refuerzoMultiple"
                  checked={this.props.refuerzoMultiple}
                  onChange={this.props.handleChange}
                />
                <label htmlFor="refuerzoMultiple">Refuerzo Múltiple</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  id="rabia"
                  name="rabia"
                  value="rabia"
                  checked={this.props.rabia}
                  onChange={this.props.handleChange}
                />
                <label htmlFor="rabia">Rabia</label>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="date"
                  id="fechaPuppy"
                  name="fecha"
                  value={this.props.fechaPuppy}
                  onChange={this.props.handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="fechaRefuerzoPuppy"
                  name="fecha"
                  onChange={this.props.handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="fechaMultiple"
                  name="fecha"
                  onChange={this.props.handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="fechaRefuerzoMultiple"
                  name="fecha"
                  onChange={this.props.handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  id="fechaRabia"
                  name="fecha"
                  onChange={this.props.handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartillaVacunacion;