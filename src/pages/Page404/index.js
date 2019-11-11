import React from "react";
import NotFoundAnimation from "../../components/NotFoundAnimation";

function Page404(props) {
    return (
        <>
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