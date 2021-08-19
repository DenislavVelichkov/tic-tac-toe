import './App.css';
import Game from "./components/Game";
import Store from "./store/Store";

function App() {
  return (
    <div className="App">
        <Store><Game/></Store>
    </div>
  );
}

export default App;
