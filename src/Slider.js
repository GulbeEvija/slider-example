import { useState } from "react";


function Slider( {dataSlider} ) {

    const [item, setItem] = useState(0);
    const photo = dataSlider[item];
  
    const previousItem = () => {
      setItem((item => {
        item --;
        if (item < 0) {
          return dataSlider.length-1;
        }
        return item;
      }))
    }
  
    const nextItem  = () => {
      setItem((item => {
        item ++;
        if (item > dataSlider.length - 1) {
          item = 0;
        }
        return item;
      }))
    }
  
  
    return (
      <div>
        
        <div className="container">
            <button onClick={previousItem} className="btn">previous</button>
            <img src={photo} alt="Item" width="300px" height="200px"/>
            <button onClick={nextItem} className="btn">next</button>
        </div>

      </div>
    );
  }
  
  export default Slider;
  