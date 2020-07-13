import React from "react";
import Row from "./Row";
import RowForm from "./RowForm";

export default class Rescatistas extends React.Component {

  	render() {
		return (
      		<div>
        		<RowForm onSubmit={this.props.addRow} />
        			{this.props.rows.map(row => (
						<Row
							key={row.id}
							onDelete={() => this.props.deleteRow(row.id)}
                            row={row}
						/>
        			))}
      		</div>
    	);
  	}
}