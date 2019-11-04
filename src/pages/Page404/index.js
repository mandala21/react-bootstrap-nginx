import React from "react";
import NotFoundAnimation from "../../components/NotFoundAnimation";

function Page404() {
    return (
        <>
            <NotFoundAnimation width={200} />
            <div>
                <h1>404 - Page not Found</h1>
                <p>Desculpe página não encontrada</p>
            </div>
        </>
    );
}

export default Page404;