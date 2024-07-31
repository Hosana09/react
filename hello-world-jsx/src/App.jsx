//components
import FirstComponent from './components/FirstComponent';

//style
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from "./components/Events";
import Rj from './assets/rj.jpg'
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import {useState} from "react";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // const name = "Joaquim";
  const[userName] = useState("Maria");

  const cars = [
      {id: 1, brand:"VW", km:1000, color:"azul", newCar:false},
      {id: 2, brand:"Ford", km:200, color:"prata", newCar:false},
      {id: 3, brand:"Toyota", km:3000, color:"vermelho", newCar:false},
      {id: 4, brand:"Fiat", km:99.000, color:"verde", newCar:false},
      {id: 5, brand:"Ford", km:0, color:"prata", newCar:true},
      {id: 6, brand:"Toyota", km:0, color:"vermelho", newCar:true},
      {id: 7, brand:"Fiat", km:0, color:"verde", newCar:true}
  ];

  function showMessage(){
      console.log("Evento do componente pai.")
  }

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
      setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Hello World React!</h1>
      <p>Sim, sou a melhor programadora em React de todos os tempos!</p>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent/>
      <Events/>
      <div>
          {/*imagem em public*/}
          <img src={"/girassol.jpg"} alt={"Girassóis"}/>
      </div>
      <div>
          {/*imagem em assets*/}
          <img src={Rj} alt={"Cidade do Rio de Janeiro"}/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props*/}
      <ShowUserName name={userName}/>
      {/* pode usar <ShowUserName name={"Matheus"}/> ou <ShowUserName name={name}/> ou <ShowUserName name={userName}/> */}
      {/* desestruturando props*/}
      <CarDetails brand={"VW"} km={1000} color={"azul"} newCar={false}/>
      {/* reaproveitando componente */}
      <CarDetails brand={"Ford"} km={200} color={"prata"} newCar={false}/>
      <CarDetails brand={"Toyota"} km={3000} color={"vermelho"} newCar={false}/>
      <CarDetails brand={"Fiat"} km={99.000} color={"verde"} newCar={false}/>
      <CarDetails brand={"Ford"} km={0} color={"prata"} newCar={true}/>
      <CarDetails brand={"Toyota"} km={0} color={"vermelho"} newCar={true}/>
      <CarDetails brand={"Fiat"} km={0} color={"verde"} newCar={true}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
          <CarDetails
              key={car.id}
              brand={car.brand}
              color={car.color}
              km={car.km}
              newCar={car.newCar}
          />
      ))}
      <Fragment propFragment={"teste"}/>
      <Container myValue={"Este é um valor passado."}>
          <p>E este vai ser o conteúdo.</p>
      </Container>

      {/*  executar função */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
