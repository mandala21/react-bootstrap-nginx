import React from "react";
import { Input, Button } from "antd";



export const InputTextGroup = React.forwardRef((props, ref) => (
    <div className="mg-bt-14">
        <p>{props.label}</p>
        <Input {...props} />
    </div>
));

export const InputPasswordGoup = React.forwardRef((props, ref) => (
    <div className="mg-bt-14">
        <p>{props.label}</p>
        <Input.Password {...props} />
    </div>
));

export const ButtonGroup = function(props){
    return (
        <div className="mg-bt-14">
            <Button 
                {...props}>
                {props.label}
            </Button>
        </div>
    );
}