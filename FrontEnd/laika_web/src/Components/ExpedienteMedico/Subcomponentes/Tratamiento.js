import React from "react";

class Tratamiento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "Make",
                    field: "make",
                    sortable: true,
                    filter: true,
                    editable: true,
                    checkboxSelection: true,
                },
                {
                    headerName: "Model",
                    field: "model",
                    sortable: true,
                    filter: true,
                    editable: true,
                },
                {
                    headerName: "Price",
                    field: "price",
                    sortable: true,
                    filter: true,
                    editable: true,
                },
            ],
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 },
            ],
        };
    }

    render() {
        return (
            <div
                className="ag-theme-alpine"
                style={{ height: "200px", width: "600px" }}
            ></div>
        );
    }
}

export default Tratamiento;
