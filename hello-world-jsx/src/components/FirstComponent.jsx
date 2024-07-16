//comentário onde é executada a lógica

import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //onde também pode utilizar esse comentário
    return (
        <div className="primeiro-componente">
            <h1>Meu primeiro componente.</h1>
            {/*se coloca comentário assim aqui*/}
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;