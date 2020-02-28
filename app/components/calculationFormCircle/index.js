import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Style from './style.css';

export default function CarpetFormCircle() {
  const [sliderValue, setSliderValue] = useState(10);
  const [resultText, setResultText] = useState('');
  const handleSliderChange = (event, value) => {
    setSliderValue(value);
    setResultText('');
  };
  const handleResultText = () => {
    const pi = 3.14;
    const r = sliderValue / 2;
    const s = r * r * pi;
    const coeficientForConversion = 100 / 615;
    const oneUnit = 200;
    const result = Math.round((s * coeficientForConversion) / oneUnit, 2);
    let text = '';
    if (result === 1) {
      text = 'vieneto';
    } else {
      text = 'vienetų';
    }
    setResultText(
      `Kilimui, kurio diametras ${sliderValue} cm, reikės apytiksliai ${result} ${text} 5 mm virvės.`,
    );
  };
  const GreenSlider = withStyles({
    root: {
      color: '#5FA59B',
    },
  })(Slider);
  return (
    <>
      <h3> Apvalus kilimas</h3>
      <p>
        Pasirinkite norimą kilimo
        <strong> diametrą</strong> centimetrais:
      </p>
      <div className={Style.slider_box}>
        <GreenSlider
          value={sliderValue}
          defaultValue={70}
          step={10}
          min={10}
          max={300}
          valueLabelDisplay="on"
          onChange={handleSliderChange}
        />
      </div>
      <button type="button" onClick={handleResultText} className={Style.button}>
        Skaičiuoti
      </button>
      <div>{resultText}</div>
    </>
  );
}
