import React, { Component } from "react";

export default class ImageChooser extends Component {
    state = {
        foto: "https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png",
    };

    imageHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ foto: reader.result });
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    render() {
        return (
            <div>
                <label htmlFor="foto">
                    <img
                        src={this.state.foto}
                        alt="Foto"
                        height="100"
                        width="100"
                    />

                </label>
                <br />
                <input
                    type="file"
                    id="foto"
                    name="foto"
                    accept="image/*"
                    onChange={this.imageHandler}
                />
            </div>
        );
    }
}


