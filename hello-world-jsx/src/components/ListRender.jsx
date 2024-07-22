import {useState} from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Gabriel", "Hosana"]);
    const [users] = useState([
        {id: 2932387, name: "Matheus", age: 31},
        {id: 2932388, name: "João", age: 32},
        {id: 2932389, name: "Maria", age: 33},
    ]);
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListRender;
