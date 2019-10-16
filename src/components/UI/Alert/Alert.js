import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

const Alert = props => {
    return (
        <div className={["Alert", props.type].join(" ")}>
            {(props.dismiss !== undefined) ?
                <Button
                    className="Button"
                >X
                </Button> : null}
            {props.children}
        </div>
    );
};

export default Alert;