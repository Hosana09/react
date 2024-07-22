import {useState} from 'react'

const ManageData = () => {
    let someData = 10;
    console.log(someData);
    const [number, setNumber] = useState(10);
    console.log(number);

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>
                Mudar valor
            </button>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>
                Mudar estado
            </button>
        </div>
    )
};

export default ManageData;
