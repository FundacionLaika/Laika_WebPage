import React, { useState } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { useHistory } from "react-router-dom";



function reducer(state, action) {
    switch (action.type) {
        case "close":
            return { open: false };
        case "close2":
            return { open2: false };
        case "open":
            return { open: true, size: action.size, dimmer: action.dimmer };
        case "open2":
            return {
                open: false,
                open2: true,
                size: action.size,
                dimmer: action.dimmer,
            };
        default:
            throw new Error("Unsupported action...");
    }
}

const ModalExampleSize = (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
        open: false,
        size: undefined,
        dimmer: undefined,
    });
    const { open, open2, size, dimmer } = state;

    const [operationOutput, setOperationOutput] = useState(false);

	const history = useHistory();


    async function deleteAnimal(animalID) {
        console.log("id animal", animalID);
        var response = await fetch("https://fundacionlaika.herokuapp.com/eliminarAnimal", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ID_Animal: animalID }),
        });

        if (response.status !== 200) return false;

        return true;
    }

    return (
        <>
            <button
                className="BotonGeneralEliminar BotonCentralEliminar"
                onClick={() =>
                    dispatch({ type: "open", size: "mini", dimmer: "blurring" })
                }
            >
                Eliminar
                <i aria-hidden="true" className="fa fa-trash fa-fw"></i>
            </button>

            <Modal
                dimmer={dimmer}
                size={size}
                open={open}
                onClose={() => dispatch({ type: "close" })}
            >
                <Modal.Header>Eliminar registros del animal</Modal.Header>
                <Modal.Content>
                    <p>
                        ¿Estás seguro que deseas eliminar permanentamente los
                        registros del animal?
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="red"
                        inverted
                        onClick={() => {
                            dispatch({ type: "close" });
                        }}
                    >
                        <Icon name="cancel" />
                        No
                    </Button>
                    <Button
                        color="green"
                        inverted
                        onClick={async () => {
                            dispatch({
                                type: "open2",
                                size: "mini",
                                dimmer: "blurring",
                            });

                            var success = await deleteAnimal(props.idAnimal);

                            setOperationOutput(success);
                        }}
                    >
                        <Icon name="checkmark" />
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>

            <Modal
                dimmer={dimmer}
                size={size}
                open={open2}
                onClose={() => dispatch({ type: "close2" })}
            >
                <Modal.Header>Resultado de operacion</Modal.Header>
                <Modal.Content>
                    <p>
                        {" "}
                        {operationOutput
                            ? "Animal eliminado exitosamente!"
                            : "No se ha podido eliminar el animal."}{" "}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color="blue"
                        inverted
                        onClick={() => {
                            dispatch({ type: "close2" });
							if (operationOutput) {
								history.push('/Laika/Consulta/');
							}
                        }}
                    >
                        <Icon name="cancel" />
                        Cerrar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    );
};

export default ModalExampleSize;
