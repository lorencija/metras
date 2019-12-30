import React from 'react';
import Main from '../../components/layout/main';
import Row from '../../components/layout/row';
import Image from '../../images/covers/medvilnines_virves.jpg';
import Style from './style.css';

export default function cottonRope() {
  return (
    <>
      <Main>
        <Row>
          <img
            src={Image}
            alt="medvilnines virves"
            width="100%"
            className={Style.border}
          />
        </Row>
        <Row>
          <h1>Virvės</h1>
        </Row>
      </Main>
    </>
  );
}
