import './App.css';
import Slider from './Slider';
import { dataSlider } from './dataSlider';

function App() {
  return (
    <div className="App">

        <Slider dataSlider={dataSlider[0]}/>

        <Slider dataSlider={dataSlider[1]}/>

        <Slider dataSlider={dataSlider[2]}/>

    </div>
  );
}

export default App;
