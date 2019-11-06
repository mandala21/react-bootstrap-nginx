import React from "react";
import NotFoundAnimation from "../../components/NotFoundAnimation";
import BodyBlue from "../../styles/BodyBlue";

function Page404(props) {
    return (
        <>
            <BodyBlue/>
            <div style={{marginTop:120}}>
                <NotFoundAnimation />
                <center>
                    <h1><blod>404</blod></h1>
                    <h3>Desculpe página não encontrada</h3>
                </center>
            </div>
        </>
    );
}

export default Page404;