import "./assets/css/App.css";
import Head from "./components/Head";
import Slider from "./components/Slider";
import Home from "./components/Home";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="App">
      <Head />
      <Slider />
      <Home />
      <Foot />
    </div>
  );
}

export default App;
