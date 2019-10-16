import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

const Alert = props => {
    const alert = (
        props.show ?
            <div className={["Alert", props.type].join(" ")}
            >
                {props.children}
                {
                    (props.dismiss === undefined) ? null :
                        <Button
                            clicked={props.dismiss}
                            className="Button"
                            value="X"
                        />
                }
            </div> : null
    )

    return (
        alert
    );
};

export default Alert;