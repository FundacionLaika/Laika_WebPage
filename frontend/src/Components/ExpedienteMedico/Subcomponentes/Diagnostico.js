import React, { Component } from "react";

class Diagnostico extends Component {
	render() {
		return (
			<div id="diagnostico">
				<div className="headerDiagnostico">
					{" "}
					<i
						aria-hidden="true"
						className="fa fa-stethoscope fa-fw separation"
					></i>
					Diagnóstico
				</div>
				<div id="bloque1Diag">
					<div id="cbs-diag">
						<div id="row-diag">
							<div className="cb cb-diag">
								<input autocomplete="off"
									type="checkbox"
									id="atropellamiento"
									name="atropellamiento"
									value="atropellamiento"
									checked={this.props.atropellamiento}
									onChange={this.props.handleChange}
								/>
								<label htmlFor="atropellamiento">
									<span></span>
								</label>
							</div>
							<div id="lb-diag">
								<label>Atropellamiento</label>
							</div>
						</div>

						<div id="row-diag">
							<div className="cb cb-diag">
								<input autocomplete="off"
									type="checkbox"
									name="tvt"
									id="tvt"
									value="tvt"
									checked={this.props.tvt}
									onChange={this.props.handleChange}
								/>
								<label htmlFor="tvt">
									<span></span>
								</label>
							</div>
							<div id="lb-diag">
								<label>TVT</label>
							</div>
						</div>

						<div id="row-diag">
							<div className="cb cb-diag">
								<input autocomplete="off"
									type="checkbox"
									name="sarnaPiel"
									value="sarnaPiel"
									id="sarnaPiel"
									checked={this.props.sarnaPiel}
									onChange={this.props.handleChange}
								/>
								<label htmlFor="sarnaPiel">
									<span></span>
								</label>
							</div>
							<div id="lb-diag">
								<label>Sarna/Piel</label>
							</div>
						</div>

						<div id="row-diag">
							<div className="cb cb-diag">
								<input autocomplete="off"
									type="checkbox"
									id="viral"
									name="viral"
									value="viral"
									checked={this.props.viral}
									onChange={this.props.handleChange}
								/>
								<label htmlFor="viral">
									<span></span>
								</label>
							</div>
							<div id="lb-diag">
								<label>Viral</label>
							</div>
						</div>
					</div>
				</div>

				<div id="bloque2Diag">
					<div id="row-diag">
						<div className="cb cb-diag">
							<input autocomplete="off"
								type="checkbox"
								id="embarazo"
								name="embarazo"
								value="embarazo"
								checked={this.props.embarazo}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="embarazo">
								<span></span>
							</label>
						</div>
						<div id="lb-diag">
							<label>Embarazo</label>
						</div>
					</div>

					<div id="row-diag">
						<div className="cb cb-diag">
							<input autocomplete="off"
								type="checkbox"
								id="cachorros"
								name="cachorros"
								value="cachorros"
								checked={this.props.cachorros}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="cachorros">
								<span></span>
							</label>
						</div>
						<div id="lb-diag">
							<label>Cachorros</label>
						</div>
					</div>

					<div id="row-diag">
						<div className="cb cb-diag">
							<input autocomplete="off"
								id="hemoparasitos"
								type="checkbox"
								name="hemoparasitos"
								value="hemoparasitos"
								checked={this.props.hemoparasitos}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="hemoparasitos">
								<span></span>
							</label>
						</div>
						<div id="lb-diag">
							<label>Hemoparásitos</label>
						</div>
					</div>

					<div id="row-diag">
						<div className="cb cb-diag">
							<input autocomplete="off"
								id="otro"
								type="checkbox"
								name="otro"
								value="otro"
								checked={this.props.otro}
								onChange={this.props.handleChange}
							/>
							<label htmlFor="otro">
								<span></span>
							</label>
						</div>
						<div id="lb-diag">
							<label>Otro</label>
						</div>
					</div>
				</div>

				<div id="bloqueOtro">
					{this.props.otro ? (
						<label htmlFor="otroEspecificar" className="inp">
							<input autocomplete="off"
								type="text"
								id="otroEspecificar"
								name="otroEspecificar"
								value={this.props.otroEspecificar}
								onChange={this.props.handleChange}
								placeholder="&nbsp;"
							/>
							<span className="label">Especificar</span>
							<span className="focus-bg"></span>
						</label>
					) : (
						<div>
							<br />
							<br />
							<br />
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Diagnostico;
