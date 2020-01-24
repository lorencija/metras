import React from 'react';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image1 from '../../images/covers/carpet.jpg';
import Image2 from '../../images/covers/gloves.jpg';
import Image3 from '../../images/covers/socks.jpg';
import Style from './style.css';
import Block from '../../components/layout/block';
import Button from '../../components/button';

export default function Contacts() {
  return (
    <>
      <Main>
        <Row>
          <Block>
            <img
              src={Image1}
              alt="carpet"
              height="300px"
              className={Style.border}
            />
          </Block>
          <Block>
            <>
              <h2 className={Style.center}>Kilimų skaičiuoklė</h2>
              <hr className={Style.line} />
              <p className={Style.paragraph}>
                Pradedant nerti kilimą dažnai kyla klausimas, kiek gi virvių
                reikės? Čia jums gali padėti skaičiuoklė. Ji apytiksliai nurodo
                kiek metrų ar vienetų virvės gali prireikti. Tiksliai įvertinti
                negalima, nes sunaudojamas kiekis priklauso nuo rašto, nėrimo
                laisvumo. Skaičiavimai paremti laikant, kad neriama paprastu
                žemu stulpeliu, 5 mm storio virvėmis, 8 Nr. vašeliu.
              </p>
              <div className={Style.center}>
                <Button
                  text="Pradėti"
                  link="/skaiciuokles/kilimu_skaiciuokle"
                />
              </div>
            </>
          </Block>
        </Row>
        <Row>
          <Block>
            <>
              <h2 className={`${Style.center} ${Style.center}`}>
                Pirštinių skaičiuoklė
              </h2>
              <hr className={Style.line} />
              <p className={Style.paragraph}>
                dhfu dfms fgsd msdkgsd mg sdg sdm gs gs gkd gkd gkd g dkg dk gkd
                gk d dhfu dfms fgsd msdkgsd mg sdg sdm gs gs gkd gkd gkd g dkg
                dk gkd
              </p>
              <div className={Style.center}>
                <Button
                  text="Pradėti"
                  link="/skaiciuokles/pirstiniu_skaiciuokle"
                />
              </div>
            </>
          </Block>
          <Block>
            <img
              src={Image2}
              alt="gloves"
              height="300px"
              className={Style.border}
            />
          </Block>
        </Row>
        <Row>
          <Block>
            <img
              src={Image3}
              alt="socks"
              height="300px"
              className={Style.border}
            />
          </Block>
          <Block>
            <>
              <h2 className={Style.center}>Kojinių skaičiuoklė</h2>
              <hr className={Style.line} />
              <p className={Style.paragraph}>
                dhfu dfms fgsd msdkgsd mg sdg sdm gs gs gkd gkd gkd g dkg dk gkd
                gk d dhfu dfms fgsd msdkgsd mg sdg sdm gs gs gkd gkd gkd g dkg
                dk gkd
              </p>
              <div className={Style.center}>
                <Button
                  text="Pradėti"
                  link="/skaiciuokles/kojiniu_skaiciuokle"
                />
              </div>
            </>
          </Block>
        </Row>
      </Main>
    </>
  );
}
