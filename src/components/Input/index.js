import React from "react";
import { Input, Button } from "antd";



export const InputTextGroup = function ({label}) {
    return (
        <div className="mg-bt-14">
            <p>{label}</p>
            <Input />
        </div>
    );
}

export const InputPasswordGoup = function ({label}) {
    return (
        <div className="mg-bt-14">
            <p>{label}</p>
            <Input.Password />
        </div>
    );
}

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