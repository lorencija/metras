import React from 'react';
import PropTypes from 'prop-types';
import Data from '../../data/socks.json';
import Style from './style.css';

export default function SocksDescription({ eye, row, sockLength }) {
  let sockWidth = 0;
  const findSockWidth = () => {
    let i;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < Data.length; i++) {
      if (sockLength === Data[i].length) {
        sockWidth = Data[i].width;
      }
    }
  };
  findSockWidth();
  const rolledEye = Math.ceil((sockWidth * eye) / 4) * 4;
  const flap = rolledEye / 2;
  const thigh = 4;
  const heelSides = Math.ceil(flap / 4);
  const heelCenter = flap - heelSides * 2;

  return (
    <>
      <table className={Style.table}>
        <tr>
          <td>Akių užmetimas</td>
          <td>
            Užmetame {rolledEye} a. ir paskirstome ant keturių virbalų po{' '}
            {rolledEye / 4} a.
          </td>
        </tr>
        <tr>
          <td>Atvartėlis ir čiurna</td>
          <td>
            Atvartėliui mezgame {flap} eil. stulpeliu 1/1 arba 2/2. Toliau
            tęskite čiurną trikotažo raštu {thigh} eiles. Atvartėlį ir čiurną
            galima megsti ir ilgesnius ar trumpesnius, jei norima kitokio
            auksčio kojinių.
          </td>
        </tr>
        <tr>
          <td>Kulno mezgimas</td>
          <td>
            Dviejų virbalų akis suverkite ant vieno virbalo. Megzkite {flap} a.,
            apsukite mezginį. Megzdami kulną, pirmą akį visuomet nukelkite
            nemegztą. Dabar megzkite išvirkščiosios pusės eilę išvirkščiosiomis
            akimis. Megzkite vis apsukdami mezginį {flap} eil. <br />
            <br />
            Akis išskirstikyte ant 3 virbalų taip: ant antro (vidurinio) virbalo
            turi būti {heelCenter}, o ant pirmo ir trečio - po {heelSides} a.
            <br />
            <br />
            1. Megzkite pirmojo virbalo {heelSides} a., tada antro virbalo{' '}
            {heelCenter - 1}. Paskutinią antro virbalo akį sumegzkite su pirma
            trečio virbalo akimi.
            <br />
            2. Mezginį apsukite ir t.t
          </td>
        </tr>
      </table>
    </>
  );
}

SocksDescription.propTypes = {
  eye: PropTypes.number,
  row: PropTypes.number,
  sockLength: PropTypes.number,
};
