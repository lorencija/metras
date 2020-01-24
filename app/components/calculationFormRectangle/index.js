import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Style from './style.css';

export default function CarpetFormRectangle() {
  const [lengthValue, setLengthValue] = useState(30);
  const [widthValue, setWidthValue] = useState(30);
  const [resultText, setResultText] = useState('');
  const handleLengthChange = (event, value) => {
    setLengthValue(value);
    setResultText('');
  };
  const handleWidthChange = (event, value) => {
    setWidthValue(value);
    setResultText('');
  };
  const handleResultText = () => {
    const s = lengthValue * widthValue;
    const coeficientForConversion = 100 / 840;
    const oneUnit = 200;
    const result = Math.ceil((s * coeficientForConversion) / oneUnit, 0);
    let text = '';
    if (result === 1) {
      text = 'vieneto';
    } else {
      text = 'vienetų';
    }
    setResultText(
      `Kilimui, kurio ilgis ${lengthValue} cm ir plotis ${widthValue} cm, 
      reikės apytiksliai ${result} ${text} 5 mm virvės.`,
    );
  };
  const GreenSlider = withStyles({
    root: {
      color: '#5FA59B',
    },
  })(Slider);
  return (
    <>
      <h3> Stačiakampis kilimas</h3>
      <p>
        Pasirinkite norimą kilimo <strong>ilgį</strong> centimetrais:
      </p>
      <div className={Style.slider_box}>
        <GreenSlider
          value={lengthValue}
          defaultValue={70}
          step={10}
          min={30}
          max={300}
          valueLabelDisplay="on"
          onChange={handleLengthChange}
        />
      </div>
      <p>
        Pasirinkite norimą kilimo <strong>plotį</strong> centimetrais:
      </p>
      <div className={Style.slider_box}>
        <GreenSlider
          value={widthValue}
          defaultValue={70}
          step={10}
          min={30}
          max={300}
          valueLabelDisplay="on"
          onChange={handleWidthChange}
        />
      </div>
      <button type="button" onClick={handleResultText}>
        Skaičiuoti
      </button>
      <div>{resultText}</div>
    </>
  );
}
