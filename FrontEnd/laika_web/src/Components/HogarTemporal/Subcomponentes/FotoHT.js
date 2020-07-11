import React, { Component } from "react";

class FotoHT extends Component {
  render() {
    return (
      <div>
        <img src={this.props.fotoHT} alt="Foto" height="100" width="100" />
        <br />
        <input
          type="file"
          id={this.props.id}
          name={this.props.id}
          accept="image/*"
          onChange={this.props.imageHandler}
        />
      </div>
    );
  }
}

export default FotoHT;
