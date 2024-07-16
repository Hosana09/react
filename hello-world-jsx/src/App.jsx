//components
import FirstComponent from './components/FirstComponent';

//style
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello World React!</h1>
      <p>Sim, sou a melhor programadora em React de todos os tempos!</p>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent/>
    </div>
  );
}

export default App;
