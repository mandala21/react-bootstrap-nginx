import React from "react";
import Lottie from "react-lottie";
import NotFoundJsonAnimation from "../../animations/not-found.json"

function NotFoundAnimation({width}){
    const bodyMovinOption = {
        loop: true,
        autoplay: true, 
        animationData: NotFoundJsonAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div style={{width:width}}>
            <Lottie options={bodyMovinOption} height={150} width={200} />
        </div>
    );
}

export default NotFoundAnimation;