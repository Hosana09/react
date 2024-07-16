const TemplateExpressions = () => {
    const name = "Hosana";
    const data = {
        age: 23,
        job: "Desenvolvedora WEB"
    };
    return (
        <div>
            <h1>Olá, {name}! Tudo bem?</h1>
            <p>Você tem {data.age} anos e trabalha como {data.job}.</p>
            <p>4 + 4 é {4 + 4}!</p>
            {console.log("Oi!")}
        </div>
    );
};

export default TemplateExpressions;