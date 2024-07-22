const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Ativou o evento.");
        console.log(e);
    //    e são os dados que o evento contém, como o elemento que foi ativado, o alvo, a posição na tela
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1> Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>
                    {/*ao colocar o parênteses depois do handleMyEvent(), a função é ativada logo depois de renderizar a página*/}
                    Clique aqui
                </button>
                <button onClick={() => console.log("Clicou")}>
                    Clique aqui também
                </button>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria existir")
                    }
                }}>
                    Clique aqui também, por favor
                </button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
};

export default Events;
