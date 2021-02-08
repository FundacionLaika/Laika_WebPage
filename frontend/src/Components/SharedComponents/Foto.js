import React, { Component } from "react";
import "./Styles/Frame.css";

class Foto extends Component {
	render() {
		return (
			<div>
				<label htmlFor={this.props.id}>
					<div className={this.props.foto ? "frame" : ""}>
						<img
							style={{ cursor: "pointer"}}
							className={this.props.foto ? "sizeFoto" : "mw5"}
							src={
								this.props.foto
									? this.props.foto
									: "/iconoPerro.png"
							}
							alt="Foto"
						/>
					</div>
				</label>

				<input
					type="file"
					style={{ display: "none" }}
					id={this.props.id}
					name="foto"
					accept="image/*"
					onChange={this.props.imageHandler}
				/>
			</div>
		);
	}
}

export default Foto;
