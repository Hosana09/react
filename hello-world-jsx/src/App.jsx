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

function App() {
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
    </div>
  );
}

export default App;
