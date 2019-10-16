import React from 'react';
import './Alert.css';
import Button from "../Button/Button";

const Alert = props => {
    const alert = (
        props.show ?
            <div className={["Alert", props.type].join(" ")}
                 onClick={props.clickDismissable ? props.dismiss : null}
            >
                {props.children}
                {
                    (props.dismiss === undefined) ? null :
                        <Button
                            clickDismissable={props.clickDismissable}
                            clicked={props.dismiss}
                            btnType={"alertClose"}
                            value="X"
                        />
                }
            </div> : null
    );

    return (
        alert
    );
};

export default Alert;