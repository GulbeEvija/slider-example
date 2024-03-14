import './App.css';
import Slider from './Slider';
import { dataSlider } from './dataSlider';

function App() {
  return (
    <div className="App">

        <Slider dataSlider={dataSlider[0].photo} />

        <Slider dataSlider={dataSlider[1].photo} />

        <Slider dataSlider={dataSlider[2].photo} />

    </div>
  );
}

export default App;
