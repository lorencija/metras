import React, { useState } from 'react';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/medvilnines_virves2.jpg';
import Style from './style.css';
import CarpetFormCircle from '../../components/calculationFormCircle';
import CarpetFormRectangle from '../../components/calculationFormRectangle';

export default function CarpetsCalculation() {
  const [carpetShape, setCarpetShape] = useState('');
  const handleChange = event => {
    setCarpetShape(event.target.value);
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
            <h1>Kilimų skaičiuoklė</h1>
          </Row>
          <Row>
            <form>
              <p>Pasirinkite norimą kilimo formą: </p>
              <label className={Style.form}>
                <input
                  type="radio"
                  value="round"
                  checked={carpetShape === 'round'}
                  onChange={handleChange}
                />
                <span className={Style.form}>Apvalus</span>
              </label>
              <label className={Style.form}>
                <input
                  type="radio"
                  value="rectangle"
                  checked={carpetShape === 'rectangle'}
                  onChange={handleChange}
                />
                <span className={Style.form}>Stačiakampis</span>
              </label>
              <p>
                Skaičiavimai pateikiami apytiklūs, apvalinama visuomet į didesnę
                pusę. Pavyzdžiui, jei pasirinkto dydžio kilimui reikia 0.3
                vieneto - skaičiavimo rezultatuose matysime 1 vnt. ( 0.3 vnt.
                atitinka 60 m. Viename vienete yra 200 m.) <br /> <br />
              </p>
              {carpetShape === 'round' && <CarpetFormCircle />}
              {carpetShape === 'rectangle' && <CarpetFormRectangle />}
            </form>
          </Row>
        </div>
      </Main>
    </>
  );
}
