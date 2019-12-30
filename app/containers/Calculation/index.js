import React from 'react';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/kilimas.jpg';
import Style from './style.css';
import LeftSide from '../../components/layout/left_side';
import RightSide from '../../components/layout/right_side';
import Block from '../../components/layout/block';

export default function Contacts() {
  return (
    <>
      <Main>
        <Row>
          <Block>
            <img
              src={Image}
              alt="carpet"
              width="300px"
              className={Style.border}
            />
          </Block>
          <Block>
            <h1 className={Style.center}>Kilimų skaičiuoklė</h1>
            <hr className={Style.line} />
            <p className={Style.paragraph}>
              Pradedant nerti kilimą dažnai kyla klausimas, kiek gi virvių
              reikės? Čia jums gali padėti skaičiuoklė. Ji apytiksliai nurodo
              kiek metrų ar vienetų virvės gali prireikti. Tiksliai įvertinti
              negalima, nes sunaudojamas kiekis priklauso nuo rašto, nėrimo
              laisvumo. Skaičiavimai paremti laikant, kad neriama paprastu žemu
              stulpeliu, 5 mm storio virvėmis, 8 Nr. vašeliu.
            </p>
            <div className={Style.center}>
              <button className={Style.button} type="button">
                Skaičiuoti
              </button>
            </div>
          </Block>
        </Row>
      </Main>
    </>
  );
}
