import React from "react";

const Scroll = (props) => {
    return (
        <div
            style={{
                overflowY: "scroll",
                height: "90vh",
            }}
        >
            {props.children}
        </div> //every props object has children. With this everthing between the scroll compomente will be rendered
    );
};

export default Scroll;
