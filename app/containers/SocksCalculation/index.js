import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/medvilnines_virves.jpg';
import SocksDescription from '../../components/socksDecsription';
import Style from './style.css';

export default function SocksCalculation() {
  const [lengthValue, setLengthValue] = useState(10);
  const [eyeValue, setEyeValue] = useState(0);
  const [rowValue, setRowValue] = useState(0);
  const [result, setResult] = useState(false);
  const [notificationEye, setNotificationEye] = useState('');
  const [notificationRow, setNotificationRow] = useState('');
  const [disabledButton, setDisabledButton] = useState('disbale');
  const handleLengthChange = (event, value) => {
    setLengthValue(value);
    setResult(false);
  };
  const handleEyeValue = event => {
    setEyeValue(event.target.value);
    setResult(false);
    if (event.target.value < 1) {
      setNotificationEye('*Įvesta per maža reiškmė!');
      setDisabledButton('disbale');
    } else if (event.target.value > 8) {
      setNotificationEye('*Įvesta per didelė reiškmė!');
      setDisabledButton('disbale');
    } else {
      setNotificationEye('');
      if (rowValue > 0 && notificationRow === '') {
        setDisabledButton('');
      }
    }
  };
  const handleRowValue = event => {
    setRowValue(event.target.value);
    setResult(false);
    if (event.target.value < 1) {
      setNotificationRow('*Įvesta per maža reiškmė!');
      setDisabledButton('disbale');
    } else if (event.target.value > 8) {
      setNotificationRow('*Įvesta per didelė reiškmė!');
      setDisabledButton('disbale');
    } else {
      setNotificationRow('');
      if (eyeValue > 0 && notificationEye === '') {
        setDisabledButton('');
      }
    }
  };
  const GreenSlider = withStyles({
    root: {
      color: '#5FA59B',
    },
  })(Slider);
  const handleResult = () => {
    setResult(true);
  };
  return (
    <>
      <Main>
        <div>
          <Row>
            <img
              src={Image}
              alt="medvilnines virves"
              width="100%"
              className={Style.border}
            />
          </Row>
          <Row>
            <h1>Kojinių skaičiuoklė</h1>
          </Row>
          <Row>
            <form>
              <p>
                Kiekvienas mezgimas skiriasi priklausomai nuo virbalų, siūlų
                storio, mezgama laisviau ar standžiau. Tikslesniems
                apskaičiavimams reikia įvertinti mezgimo tankumą. Jis
                apskaičiuojamas numezgus pavyzdinį gaminį ltrikotažo raštu (1
                eilė gerosios akys, 2 eilė išvirkščios akys, t.t.) ir
                suskaičiavus kiek yra akių ir eilių viename centimetre. Pvz. :
                užmetame 20 akių ir numezgame 20 eilių. Išmatuojame mezginio
                plotį - 8 cm. Atmetame dvi kraštines akis (20-2=18), kurios būna
                užsilenkusios ir nepatenka į plotį. Viename centimetre gauname
                2.25 akių (18/8). Išmatuojame aukštį - 6 cm. Viename centimetre
                gauname 3.33 eilių (20/6).
              </p>
              <p>
                <strong>Įveskite mezgimo tankumą: </strong>
              </p>
              <label>
                <span>Viename centimetre yra </span>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  max="8"
                  onChange={handleEyeValue}
                />
                <span> akių. </span>
                <span>{notificationEye}</span>
              </label>
              <br />
              <br />
              <label>
                <span>Viename centimetre yra </span>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  max="8"
                  onChange={handleRowValue}
                />
                <span> eilių. </span>
                <span>{notificationRow}</span>
              </label>
              <p>
                <strong>Pasirinkite norimą pėdos ilgį (cm): </strong>
              </p>
              <div className={Style.slider_box}>
                <GreenSlider
                  value={lengthValue}
                  defaultValue={10}
                  step={1}
                  min={10}
                  max={32}
                  valueLabelDisplay="on"
                  onChange={handleLengthChange}
                />
              </div>
            </form>
          </Row>
          <button
            type="button"
            disabled={disabledButton}
            onClick={handleResult}
            className={Style.button}
          >
            Skaičiuoti
          </button>
          {result && (
            <SocksDescription
              eye={eyeValue}
              row={rowValue}
              sockLength={lengthValue}
            />
          )}
        </div>
      </Main>
    </>
  );
}
