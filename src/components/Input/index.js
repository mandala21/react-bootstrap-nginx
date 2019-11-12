import React from "react";
import { Input } from "antd";



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