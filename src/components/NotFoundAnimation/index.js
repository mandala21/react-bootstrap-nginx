import React from "react";
import ReacBodyMovin from "react-bodymovin";
import NotFoundJsonAnimation from "../../animations/not-found.json"

function NotFoundAnimation({width}){
    const bodyMovinOption = {
        loop:true,
        autoplay:true,
        prerender:true,
        animationData:NotFoundJsonAnimation,
    }

    return (
        <div style={{width:width}}>
            <ReacBodyMovin options={bodyMovinOption} />
        </div>
    );
}

export default NotFoundAnimation;